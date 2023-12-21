import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <div class="ms_profile_wrapper">
        <div class="ms_profile_box">
          <h1>Send Us a Message</h1>
          <div class="ms_pro_form">
            <div class="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Name" class="form-control" />
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="Phone Number"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input type="text" placeholder="Address" class="form-control" />
            </div>
            <div class="form-groupmk">
              <label>Address</label>
              <textarea class="form-control" rows="3" id="qust"></textarea>
            </div>
            <div class="pro-form-btn text-center marger_top15">
              <a href="#" class="ms_btn">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
