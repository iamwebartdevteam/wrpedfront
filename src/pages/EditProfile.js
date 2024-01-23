import React, { useEffect, useState } from "react";
import * as API from "../api/index";
import { toast } from "react-toastify";
import { USASTATE } from "../commonData/staticData";
import { MESSAGE } from "../schemas/Validation";
const EditProfile = ({
  formData,
  handalerChanges,
  allCityData,
  allCountryData,
  allStateData,
}) => {
  const [errorName, setErrorName] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorState, setErrorState] = useState("");
  const [errorCountry, setErrorCountry] = useState("");

  const userdataUpdate = async () => {
    const header = localStorage.getItem("_tokenCode");
    if (formData.name === "") {
      setErrorName("This field is required");
    } else if (formData.city === "") {
      setErrorCity("This field is required");
    } else if (formData.state === "") {
      setErrorState("This field is required");
    } else if (formData.country === "") {
      setErrorCountry("This field is required");
    }
    if (
      !formData.name ||
      !formData.city ||
      !formData.state ||
      !formData.country
    ) {
    } else {
      try {
        const reqObj = {
          name: formData.name,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          address: formData.address,
          address1: formData.address1,
          phone: formData.phone,
          id: localStorage.getItem("__userId"),
        };
        console.log("reqObj", reqObj);
        const response = await API.getuser_update(reqObj, header);
        console.log("response", response);
        if (response.data.data.success === 1) {
          MESSAGE(response.data.data.msg, 1);
        }
      } catch (error) {}
    }
  };

  const countrydata = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
    } catch (error) {}
  };
  useEffect(() => {
    countrydata();
  }, []);
  return (
    <>
      <div class="ms_profile_box">
        <div class="ms_pro_form">
          <div class="form-group">
            <label>
              Name <span className="requed"> * </span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={formData.name}
              onChange={handalerChanges}
              class="form-control"
            />
            {errorName ? <p>{MESSAGE(errorName)}</p> : ""}
          </div>
          <div class="form-group">
            <label>
              Email <span className="requed"> * </span>
            </label>
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
            <label>Phone Number (optional)</label>
            <input
              type="text"
              placeholder="Phone No"
              class="form-control"
              value={formData.phone}
              name="phone"
              onChange={handalerChanges}
            />
          </div>
          <div class="form-group">
            <label>Address (optional)</label>
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
            <label>Address1 (optional)</label>
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
            <label>
              Country <span className="requed"> * </span>
            </label>
            <select
              value={formData.country}
              onChange={handalerChanges}
              name="country"
              class="form-control"
            >
              <option>--- Select ---</option>
              {allCountryData.map((item, index) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p>{errorCountry}</p>
          </div>
          <div class="form-group">
            <label>
              State <span className="requed"> * </span>
            </label>
            <select
              onChange={handalerChanges}
              value={formData.state}
              name="state"
              class="form-control"
            >
              <option>--- Select ---</option>
              {allStateData.map((item, index) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
            <p>{errorState}</p>
          </div>
          <div class="form-group">
            <label>
              City <span className="requed"> * </span>
            </label>
            <select
              value={formData.city}
              onChange={handalerChanges}
              name="city"
              class="form-control"
            >
              <option>--- Select ---</option>
              {allCityData.map((item, index) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
            <p>{errorCity}</p>
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
