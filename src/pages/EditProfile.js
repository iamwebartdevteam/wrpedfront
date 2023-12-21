import React from "react";
import * as API from "../api/index";
import { toast } from "react-toastify";
import { USASTATE } from "../commonData/staticData";
import { MESSAGE } from "../schemas/Validation";
const EditProfile = ({ formData, handalerChanges }) => {
  const userdataUpdate = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        name: formData.name,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        address: formData.address,
        address1: formData.address1,
        id: localStorage.getItem("__userId"),
      };
      console.log("reqObj", reqObj);
      const response = await API.getuser_update(reqObj, header);
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
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={formData.name}
              onChange={handalerChanges}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              readOnly
              type="Email"
              placeholder="Email"
              class="form-control"
              value={formData.email}
              name="email"
              onChange={handalerChanges}
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handalerChanges}
              name="address"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Address1</label>
            <input
              type="text"
              placeholder="Address1"
              value={formData.address1}
              onChange={handalerChanges}
              name="address1"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>City</label>
            <input
              type="text"
              value={formData.city}
              onChange={handalerChanges}
              name="city"
              placeholder="City"
              class="form-control"
            />
          </div>
          {/* <div class="form-group">
            <label>Zip Code</label>
            <input type="text" placeholder="Zip Code" class="form-control" />
          </div> */}
          <div class="form-group">
            <label>State</label>
            <select
              onChange={handalerChanges}
              value={formData.state}
              name="state"
              class="form-control"
            >
              <option>--- Select ---</option>
              {USASTATE.map((item, index) => (
                <option>{item.name}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handalerChanges}
              name="country"
              class="form-control"
            />
          </div>
          <div class="pro-form-btn text-center marger_top15">
            <button onClick={userdataUpdate} class="ms_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
