import React from "react";
import "./Login.css";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(50)
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/user/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                navigate("/");
              }
            });
        }}
        validationSchema={loginSchema}
       
      >
        {({
          values, 
          errors, 
          touched, // touched 
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
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
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

export default Login;