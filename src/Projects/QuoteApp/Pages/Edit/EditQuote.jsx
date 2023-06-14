import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const editQuoteSchema = yup.object({
  quoteText: yup.string().required().min(6).max(100),
  quoteAuthor: yup.string().required().min(4).max(100),
  quoteSource: yup.string().required().min(4).max(200),
  category: yup.string().required(),
});

const EditQuote = () => {
  const [quoteData, setQuoteData] = useState({  quoteText: "",
          quoteAuthor: "",
          quoteSource: "",
          category: "",});
const [categories, setCategories] = useState([])

  const params = useParams();

  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    fetch(`https://js-course-server.onrender.com/quotes/get-quote/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuoteData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);


  console.log(quoteData)

  const editQuote = (values) => {
    fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Uspesno");
          navigate("/quote");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="add-quote-wrapper">
      <button
        className=""
        onClick={() => {
          navigate("/quote");
        }}
      >
        Back
      </button>
      <Formik
      enableReinitialize={true}
        initialValues={quoteData}
        validationSchema={editQuoteSchema}
        onSubmit={(values, actions) => {
          editQuote(values);
          // actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <div className="add-quote-card">
              <p>Author</p>
              <input
                type="text"
                name="quoteAuthor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteAuthor}
                className={`${errors.quoteAuthor ? "input-error" : ""}`}
              />
              <p className="error-message">
                {errors.quoteAuthor &&
                  touched.quoteAuthor &&
                  errors.quoteAuthor}
              </p>
            </div>

            <div className="add-quote-card">
              <p>Text</p>

              <textarea
                name="quoteText"
                id=""
                cols="25"
                rows="5"
                className={`${errors.quoteText ? "input-error" : ""}`}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteText}
              ></textarea>
              <p className="error-message">
                {errors.quoteText && touched.quoteText && errors.quoteText}
              </p>
            </div>

            <div className="add-quote-card">
              <p>Source</p>
              <input
                type="text"
                name="quoteSource"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quoteSource}
                className={`${errors.quoteSource ? "input-error" : ""}`}
              />
              <p className="error-message">
                {errors.quoteSource &&
                  touched.quoteSource &&
                  errors.quoteSource}
              </p>
            </div>

            <div>
                <p>Category</p>
                <select
                  name="category"
                  onChange={handleChange}
                  value={values.category}
                >
                  <option value={""} disabled={true}>
                    -- Izaberi kategoriju --
                  </option>
                  {categories.map((item, index) => (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <p className="error-message">
                  {errors.category && touched.category && errors.category}
                </p>
              </div>

            <button onClick={handleSubmit} type="button">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditQuote;
