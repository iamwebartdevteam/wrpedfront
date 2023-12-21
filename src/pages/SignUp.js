import { useFormik } from "formik";
import { MESSAGE, userSchema } from "../schemas/Validation.js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import * as API from "../api/index";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState(0);
  const [otp, setOtp] = useState("");
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        submitButton(values);
      },
    });

  //? USER create
  const submitButton = async (values) => {
    Reflect.deleteProperty(values, "confirmPassword");
    console.log("values", values);
    const response = await API.user_registration(values);
    console.log("response", response);
    if (response.data.data.success === 1) {
      setIsEmail(1);
      const headerObj = {
        Authorization: `Bearer ${response.data.token_code}`,
      };
      localStorage.setItem("_tokenCode", JSON.stringify(headerObj));
      MESSAGE(response.data.data.msg, 1);
      localStorage.setItem("__userId", response.data.data.id);
    } else {
      MESSAGE(response.data.data.msg.email);
    }
  };

  const verifiOtp = async () => {
    try {
      const reqObj = {
        email: values.email,
        otp: otp,
      };
      const response = await API.otp_varification(reqObj);
      console.log("response", response);
      if (response.data.data.success === 1) {
        setIsLogin(true);
        navigate("/my-account");
        MESSAGE(response.data.data.msg, 1);
      } else {
        MESSAGE(response.data.data.msg);
      }
    } catch (error) {}
  };

  const resendOtp = async () => {
    try {
      const reqObj = {
        email: values.email,
      };
      const response = await API.resend_otp(reqObj);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
      }
    } catch (error) {}
  };

  return (
    <>
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
            {isEmail === 0 ? (
              <>
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      class="form-control"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class="fa_icon form-user" aria-hidden="true"></i>
                    </span>
                    {touched.name && errors.name ? (
                      <>
                        <p className="errorMess">{errors.name}</p>
                      </>
                    ) : null}
                  </div>
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
                  <div class="form-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="form-control"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span class="form_icon">
                      <i class=" fa_icon form-lock" aria-hidden="true"></i>
                    </span>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <>
                        <p className="errorMess">{errors.confirmPassword}</p>
                      </>
                    ) : null}
                  </div>
                  <button class="ms_btn">register now</button>
                </form>
                <p>
                  Already Have An Account? <Link to="/login">login here</Link>
                </p>
              </>
            ) : (
              <>
                <h2 className="mb-4">Email verification</h2>

                <div className="otpInput">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span className="dassh">-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <button class="ms_btn" onClick={verifiOtp}>
                  Verify OTP
                </button>
                <p>
                  <span class="ms_modal resend" onClick={resendOtp}>
                    Resend OTP
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
