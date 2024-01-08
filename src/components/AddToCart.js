import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../api/index";
import { IMG } from "../api/constant";
import { MESSAGE } from "../schemas/Validation";
import cartimg from "../assets/blank.png";
const AddToCart = ({ cartItem, totalAmount, rootApiData }) => {
  console.log("cartItem", cartItem);

  const multipaleOrder = async () => {
    const header = localStorage.getItem("_tokenCode");
    const user = localStorage.getItem("__userId");
    let newData = cartItem.map((obj) => {
      const {
        id,
        user,
        created_at,
        is_delivered,
        is_paid,
        updated_at,
        songimage,
        songname,
        templatetitle,
        templatetype,
        ...rest
      } = obj;
      return rest;
    });
    const newArray = newData.map((obj) => {
      return { ...obj, user };
    });
    console.log("newArray", newArray);
    try {
      const response = await API.multipaleOrder(newArray, header);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.msg, 1);
        window.open(response.data.url);
      }
    } catch (error) {}
  };

  const cartDelete = async (data) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        userid: localStorage.getItem("__userId"),
        cartId: data,
      };
      const response = await API.cartItemDelete(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        MESSAGE(response.data.data, 1);
        rootApiData();
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {cartItem.length === 0 ? (
        <>
          <div className="cartiMGshop">
            <img src={cartimg} />
            <Link to="/song-list" className="ms_btn">
              continue shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <section class="mt-5">
            <div class="containerfh">
              <div class="cart">
                <div class="table-responsive">
                  <table class="table">
                    <thead class="thead-darks">
                      <tr>
                        <th scope="col" class="text-white">
                          Image
                        </th>
                        <th scope="col" class="text-white">
                          Title
                        </th>
                        <th scope="col" class="text-white">
                          Template
                        </th>
                        <th scope="col" class="text-white">
                          Amount
                        </th>
                        <th scope="col" class="text-white">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item, index) => (
                        <tr key={index}>
                          <td width="15%">
                            <div class="main">
                              <div class="d-flex">
                                <img
                                  className="w-100"
                                  src={IMG + item.songimage}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6>{item.songname}</h6>
                          </td>
                          <td>
                            <h6>{item.templatetitle}</h6>
                          </td>
                          <td>
                            <h6>${item.amount}.00</h6>
                          </td>
                          <td>
                            <span
                              className="trash"
                              onClick={() => cartDelete(item.id)}
                            >
                              <i class="bi bi-trash3"></i>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div className="row containerfh">
            <div className="col-md-8">
              <div className="align-items-center d-flex h-100 justify-content-lg-start text-lg-startss">
                <Link to="/song-list" className="ms_btn">
                  continue shopping
                </Link>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="checkout">
                <ul>
                  {/* <li class="subtotal">
                subtotal
                <span>$60.00</span>
              </li> */}
                  <li class="cart-total">
                    Total
                    <span>$ {totalAmount}.00</span>
                  </li>
                </ul>
                <button onClick={multipaleOrder} class="proceed-btn w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddToCart;
