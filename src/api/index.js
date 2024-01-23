import axios from "axios";
import * as c from "../api/constant";

// ? REGISTRATION API
export const user_registration = async (data) => {
  try {
    const url = c.SIGNUP;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const otp_varification = async (data) => {
  try {
    const url = c.SIGNUP + "/otp-verification";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const user_login = async (data) => {
  try {
    const url = c.SIGNUP + "/login";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const user_forgotPass = async (data) => {
  try {
    const url = c.SIGNUP + "/forgotpassword";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const forgotPass_new = async (data) => {
  try {
    const url = c.SIGNUP + "/resetpassword";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const resend_otp = async (data) => {
  try {
    const url = c.SIGNUP + "/resent-otp";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
export const get_subCategory = async (data, header) => {
  try {
    const url = c.GETSUBCATAGORY + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const getMain_subCategory = async (header) => {
  try {
    const url = c.SUBCATAGORIES;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const subCategoryId = async (data, header) => {
  try {
    const url = c.SUBCATAGORIES + "/categorywise";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const audiomarge = async (data, header) => {
  try {
    const url = c.MERGEAUDIO;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const audiomarge_delete = async (data, header) => {
  try {
    const url = c.MERGEAUDIO + "/" + data;
    const res = await axios.delete(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const subCategoryIdDetails = async (data, header) => {
  try {
    const url = c.SUBCATAGORIES + "/" + data + "/songs";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const songWiseTempleteList = async (data, header) => {
  try {
    const url = c.SONGTAMPLET + "/" + data;

    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const scriptGuide = async (header, data) => {
  try {
    const url = c.SCRIPT + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const scriptGuide_byId = async (data, header) => {
  try {
    const url = c.SCRIPT + "/id/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getuserDataID = async (data, header) => {
  try {
    const url = c.SIGNUP + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });

    return res;
  } catch (e) {
    return e.response;
  }
};
export const getmusicBox = async (data, header) => {
  try {
    const url = c.SIGNUP + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });

    return res;
  } catch (e) {
    return e.response;
  }
};

export const getuser_update = async (data, header) => {
  try {
    const url = c.SIGNUP + "/user-update";
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const changePassword = async (data, header) => {
  try {
    const url = c.SIGNUP + "/password-change";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const add_order = async (data, header) => {
  try {
    const url = c.ORDER;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const addToCart = async (data, header) => {
  try {
    const url = c.ADDTOCART;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getCartList = async (data, header) => {
  try {
    const url = c.GETCART + "/" + data;
    const res = await axios.get(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const cartItemDelete = async (data, header) => {
  try {
    const url = c.DELETECARTITEM + "/" + data.userid + "/" + data.cartId;
    const res = await axios.delete(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const multipaleOrder = async (data, header) => {
  try {
    const url = c.MULTIORDER;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const payment_check = async (data, header) => {
  try {
    const url = c.PAYMENT;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const aboutData = async (header) => {
  try {
    const url = c.URL + "/aboutus";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const search_song_list = async (data, header) => {
  try {
    const url = c.SONG + "/" + "search-songs";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const search_song_lists = async (data, header) => {
  try {
    const url = c.URL + "/Searchsong/" + data.cataId + "/" + data.queris;
    console.log("url", url);
    const res = await axios.get(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const search_subcatagory_list = async (data, header) => {
  try {
    const url = c.URL + "/searchubcategory/" + data;
    const res = await axios.get(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export const getfaqdata = async (header) => {
  try {
    const url = c.URL + "/faq";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const contactUspage = async (data, header) => {
  try {
    const url = c.URL + "/contactus";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allCountry = async (header) => {
  try {
    const url = c.URL + "/country";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allState = async (data, header) => {
  try {
    const url = c.URL + "/country/" + data + "/states";
    console.log("url", url);
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
export const allCity = async (data, header) => {
  try {
    const url = c.URL + "/state/" + data + "/cities";
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
