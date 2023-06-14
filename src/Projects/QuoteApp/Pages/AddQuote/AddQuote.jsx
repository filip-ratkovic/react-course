import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Navigate } from "react-router-dom";

const loginSchema = yup.object({
  text: yup.string().required().min(6).max(200),
  author: yup.string().required(),
  source: yup.string().required(),
  category: yup.string().required(),
});

function AddQuote() {
  const [categories, setCategories] = useState([]);
  const token = ''

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/category/get-all")
      .then((data) => data.json())
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  if (!token) {
    return <Navigate to={'/'} replace={true}/>
  }
  return (
    <div>
      <h1>Add quote</h1>
      <Formik
        initialValues={{ text: "", author: "", source: "", category: "" }}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/quotes/add-quote", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {});
        }}
        validationSchema={loginSchema}
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
            <button
              onClick={() => {
                console.log(values, "values");
                console.log(errors, "errors");
                console.log(touched, "touched");
              }}
            >
              Console log states
            </button>

            <div>
              <input
                type="text"
                name="quote"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quote}
                placeholder="enter quote"
              />
              <p className="error-message">
                {errors.quote && touched.quote && errors.quote}
              </p>
            </div>

            <div>
              <input
                type="text"
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                placeholder="enter author name"
              />
              <p className="error-message">
                {errors.author && touched.author && errors.author}
              </p>
            </div>

            <div>
              <input
                type="text"
                name="source"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.source}
                placeholder="enter source"
              />
              <p className="error-message">
                {errors.source && touched.source && errors.source}
              </p>
            </div>

          

            <div>
              
              <select name="category" id="">
                {categories.map((category) => {
                     <option value={category}>{category}</option>
                })}
              </select>
              <p className="error-message">
                {errors.category && touched.category && errors.category}
              </p>
            </div>
            <button onClick={handleSubmit} type="button">
              add quote
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddQuote;
