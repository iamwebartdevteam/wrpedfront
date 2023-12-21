import { useFormik } from "formik";
import React from "react";
import { MESSAGE, passwordChangeSchema } from "../schemas/Validation";
import * as API from "../api/index";
import { toast } from "react-toastify";
const initialValues = {
  password: "",
};
const ChangesPassword = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: passwordChangeSchema,
      onSubmit: (values) => {
        loginSubmit(values);
      },
    });
  const loginSubmit = async (value) => {
    const header = localStorage.getItem("_tokenCode");
    const id = localStorage.getItem("__userId");
    let newPassdata = {
      ...values,
      id,
    };
    console.log("newPassdata", newPassdata);
    try {
      const response = await API.changePassword(newPassdata, header);
      console.log("response", response);
      if (response.data.data.success === 1) {
        MESSAGE(response.data.data.msg, 1);
      }
    } catch (error) {}
  };
  return (
    <>
      <div class="ms_profile_box">
        <div class="ms_pro_form">
          <form onSubmit={handleSubmit}>
            <div class="row">
              {/* <div class="col-md-12">
              <div class="form-group">
                <label>Old Password</label>
                <input
                  type="password"
                  placeholder="password"
                  class="form-control"
                />
              </div>
            </div> */}
              <div class="col-md-12">
                <div class="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    class="form-control"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.password && errors.password ? (
                    <>
                      <p className="errorMess">{errors.password}</p>
                    </>
                  ) : null}
                </div>
              </div>
              {/* <div class="col-md-12">
              <div class="form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  placeholder="password"
                  class="form-control"
                />
              </div>
            </div> */}
            </div>
            <div class="pro-form-btn text-center marger_top15">
              <button class="ms_btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangesPassword;
