import React from "react";
// import "./Login.css";
import "../SignUp/signUp.css"
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(50)
});

const token = localStorage.getItem('authToken');

const Login = () => {
  const navigate = useNavigate();


  if(token) {
    const decoded = jwtDecode(token);
    console.log(decoded)
  }
  return (
    <div className="sign-up-wrapper">
      <h1>Login</h1>
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
                localStorage.setItem("authToken", data.token);
                navigate("/quote");
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
          <div className="inputs-wrapper">
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
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