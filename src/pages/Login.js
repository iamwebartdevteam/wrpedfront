import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MESSAGE, loginSchema } from "../schemas/Validation";
import * as API from "../api/index";
const initialValues = {
  email: "",
  password: "",
};
const Login = ({ setIsLogin, setCartItem }) => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        loginSubmit(values);
      },
    });
  const loginSubmit = async (value) => {
    try {
      const response = await API.user_login(value);
      if (response.data.data.success === 1) {
        setCartItem(response.data.data.cart);
        const headerObj = {
          Authorization: `Bearer ${response.data.token_code}`,
        };
        localStorage.setItem("_tokenCode", JSON.stringify(headerObj));
        localStorage.setItem("isLogin", true);
        setIsLogin(localStorage.getItem("isLogin"));
        localStorage.setItem("__userId", response.data.data.id);
        MESSAGE(response.data.data.msg, 1);
        navigate("/my-account");
      } else {
        MESSAGE(response.data.data.msg);
      }
    } catch (error) {}
  };

  return (
    <>
      <div class="ms_genres_wrapper">
        <div class="registersec">
          <div class="row">
            <div class="ms_register_img">
              <img
                src="assets/images/register_img.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ms_register_form">
              <h2>login</h2>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    class="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span class="form_icon">
                    <i class="fa_icon form-envelope" aria-hidden="true"></i>
                  </span>
                  {touched.email && errors.email ? (
                    <>
                      <p className="errorMess">{errors.email}</p>
                    </>
                  ) : null}
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    class="form-control"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span class="form_icon">
                    <i class="fa_icon form-lock" aria-hidden="true"></i>
                  </span>
                  {touched.password && errors.password ? (
                    <>
                      <p className="errorMess">{errors.password}</p>
                    </>
                  ) : null}
                </div>
                <button class="ms_btn" onClick={loginSubmit}>
                  login now
                </button>
              </form>
              <div class="popup_forgot">
                <Link to="/forgot-password">Forgot Password ?</Link>
              </div>
              <p>
                Don't Have An Account?{" "}
                <Link to="/signup" class="ms_modal1 hideCurrentModel">
                  register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
