import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MESSAGE, forGotSchema } from "../schemas/Validation";
import * as API from "../api/index";
import { toast } from "react-toastify";
import { useState } from "react";
import OTPInput from "react-otp-input";
import NewPasswordSet from "../components/NewPasswordSet";
const initialValues = {
  email: "",
};
const ForgotPassword = ({ setIsLogin }) => {
  const [isEmail, setIsEmail] = useState(0);
  const [otp, setOtp] = useState("");
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forGotSchema,
      onSubmit: (values) => {
        loginSubmit(values);
      },
    });

  const loginSubmit = async (value) => {
    try {
      const response = await API.user_forgotPass(value);
      console.log("responseaaa", response);
      if (response.data.data.success === 1) {
        setIsEmail(1);
        MESSAGE(response.data.data.msg, 1);
        //navigate("/my-account");
      } else {
        MESSAGE(response.data.data.msg);
      }
    } catch (error) {}
  };

  const verifiOtp = async () => {
    try {
      const reqObj = {
        email: values.email,
        otp: otp,
      };
      console.log("reqObj", reqObj);
      const response = await API.otp_varification(reqObj);
      console.log("response", response);
      if (response.data.data.success === 1) {
        setIsEmail(3);
        MESSAGE(response.data.data.msg, 1);
        //navigate("/my-account");
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
      console.log("response", response);
      if (response.data.success === 1) {
        toast(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          type: "success",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
              {isEmail === 0 ? (
                <>
                  <h2>Forgot Password</h2>
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
                    <button class="ms_btn" onClick={loginSubmit}>
                      Submit
                    </button>
                  </form>
                </>
              ) : isEmail === 1 ? (
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
                    <span onClick={resendOtp} class="ms_modal resend">
                      Resend OTP
                    </span>
                  </p>
                </>
              ) : (
                <NewPasswordSet email={values.email} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
