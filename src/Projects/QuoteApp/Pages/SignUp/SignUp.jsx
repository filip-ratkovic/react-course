import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import "./signUp.css"

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(50),
  confirmPassword: yup.string().required().min(6).max(50),
  fullName: yup.string().required().min(2),
  //   .matches(/^([a-zA-Z]{2,}\\'?-?[a-zA-Z]{2,})$/,
  //   'Input shoud look: Test Test')
});

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="sign-up-wrapper">
      <h1 className="header">Sign up</h1>
      <Formik
      className="formik"
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
        }}
        onSubmit={(values, actions) => {
          fetch("https://js-course-server.onrender.com/user/signup", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                navigate("/login");
              }
            });
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
          <div className="inputs-wrapper">
            <div className="input-wrapper">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              <p className="error-message">
                {errors.fullName && touched.fullName && errors.fullName}
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <p className="error-message">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </div>

            <button onClick={handleSubmit} type="button">
              Submit
            </button>
                  <div>
                  <Link to={'/login'}>You have account ?</Link>

                  </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
