import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { MESSAGE } from "../schemas/Validation";
const initialData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(initialData);
  const handalerChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const addContacty = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message,
      };
      console.log("reqObj", reqObj);
      const response = await API.contactUspage(reqObj, header);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
        setFormData("");
      }
      console.log("response", response);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="ms_profile_wrapper">
        <div class="ms_profile_box contactUs">
          <h1>Send Us a Message</h1>
          <div class="ms_pro_form">
            <div class="form-group">
              <label>Name *</label>
              <input
                type="text"
                placeholder="Name"
                class="form-control"
                name="name"
                value={formData.name}
                onChange={handalerChanges}
              />
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input
                type="email"
                placeholder="Email"
                class="form-control"
                name="email"
                value={formData.email}
                onChange={handalerChanges}
              />
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="Phone Number"
                class="form-control"
                name="phone"
                value={formData.phone}
                onChange={handalerChanges}
              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                placeholder="Address"
                class="form-control"
                name="address"
                value={formData.address}
                onChange={handalerChanges}
              />
            </div>
            <div class="form-groupmk">
              <label>Message</label>
              <textarea
                class="form-control"
                rows="3"
                id="qust"
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handalerChanges}
              ></textarea>
            </div>
            <div class="pro-form-btn text-center marger_top15">
              <button onClick={addContacty} class="ms_btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
