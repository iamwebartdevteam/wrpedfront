import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as API from "../api/index";
import { MESSAGE } from "../schemas/Validation";
import { IMG } from "../api/constant";
import check from "../assets/images/check.png";
import loader from "../assets/images/loader.gif";
const ThankYou = () => {
  const [music, setMusic] = useState([]);
  const navaget = useNavigate();

  useEffect(() => {
    const getQueryParameter = (name) => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      return urlSearchParams.get(name);
    };
    const paymentId = getQueryParameter("paymentId");
    const payerId = getQueryParameter("PayerID");

    const paymentCheck = async () => {
      const header = localStorage.getItem("_tokenCode");
      try {
        const reqObj = {
          paymentId: paymentId,
          PairID: payerId,
        };
        console.log("reqObj", reqObj);
        const response = await API.payment_check(reqObj, header);
        if (response.data.success === 1) {
          //MESSAGE(response.data.msg, 1);
          setMusic(response.data.data);
        } else {
          navaget("/");
          //MESSAGE(response.data.msg);
        }
      } catch (error) {}
    };
    paymentCheck();
  }, []);

  return (
    <>
      <section class="thankyousec py-5">
        <div class="container">
          <div class="row justify-content-evenly">
            <div class="col-md-11">
              {music.length === 0 ? (
                <>{/* <img src={loader} /> */}</>
              ) : (
                <>
                  <div class="thnkbx text-center">
                    <div class="thnkimg">
                      <img src={check} />
                    </div>
                    <h1>Thank You!</h1>
                    <h4 class="pb-2">Your Order has been placed</h4>
                    <div class="cart">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="thead-darks">
                            <tr>
                              <th scope="col" class="text-white">
                                Id
                              </th>
                              <th scope="col" class="text-white">
                                Order Name
                              </th>
                              <th scope="col" class="text-white">
                                File
                              </th>

                              {/* <th scope="col" class="text-white">
                                Action
                              </th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {music.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <h6>{index + 1}</h6>
                                </td>
                                <td>
                                  <h6>{item.templatename}</h6>
                                </td>
                                <td>
                                  <h6>
                                    <audio
                                      controls
                                      src={IMG + item.musicfile}
                                    ></audio>
                                  </h6>
                                </td>
                                {/* <td>
                                  <h6>${item.amount}.00</h6>
                                </td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <ul className="productfile">
                      {data.map((item, index) => (
                        <li className="align-items-center d-flex justify-content-center">
                          <span className="countNum">{index + 1}</span>
                          <span>
                            <audio controls src={IMG + item.musicfile}></audio>
                          </span>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                  <div class="col-md-12" style={{ marginTop: "5em" }}>
                    <div class="btnprt text-center mt-5">
                      <Link to="/song-list" class="ms_btn">
                        Back to Song
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div class="col-lg-7 d-none">
              <h5 class="mb-4">Order List</h5>
              <div class="grp_sec">
                <div class="img_sec border_prt">
                  <img src="assets/images/music.png" />
                </div>
                <div class="song_item border_prt">
                  <h5>Alan Walker - Faded</h5>
                  <p>#415642534780</p>
                </div>
                <div class="border_prt">
                  <p>$1.99</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-none">
              <div class="right_sec">
                <h5 class="mb-4">Order Summary</h5>
                <div class="list_sec">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                    <li>
                      <span>Subtotal</span>
                      <span>$1.99</span>
                    </li>
                  </ul>
                </div>
                <div class="total_sec">
                  <ul>
                    <li>Total</li>
                    <li>$8.63</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
