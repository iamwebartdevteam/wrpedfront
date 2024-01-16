import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Base from "../components/Base";
import Song from "../pages/Song";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Category from "../pages/Category";
import AudioTrack from "../components/AudioTrack";
import WrapInMusic from "../pages/WrapInMusic";
import Testimonialss from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyAccount from "../pages/MyAccount";
import ForgotPassword from "../pages/ForgotPassword";
import CategoryDetails from "../pages/CategoryDetails";
import VoiceMess from "../pages/VoiceMess";
import MessagePlacePage from "../pages/MessagePlacePage";
import MusicDetails from "../pages/MusicDetails";
import ThankYou from "../pages/ThankYou";

import * as API from "../api/index";
import CataDetails from "../pages/CataDetails";
import Payment from "../pages/Payment";
import SongDetails from "../pages/SongDetails";
import MusicTemplete from "../pages/MusicTemplete";
import Cart from "../components/Cart";
const AppRouter = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");

  const [trackData, setTrackData] = useState([]);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log("isLogin", isLogin);
  const singMusicPlay = (index) => {
    // setIsPlaying(true);
    // setCurrentTrack(tracks[index]);
    //setIsPlaying(true);
    //setCurrentTrack(tracks[index]);
    // setMusicIndex(index);
    // singMusicPlayTest();
    //console.log("singMusicPlay", data);
  };

  const rootApiData = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.aboutData(header);

      const cartresponse = await API.getCartList(
        localStorage.getItem("__userId"),
        header
      );
      console.log("cartresponse", cartresponse);
      setTotalAmount(cartresponse.data.total_amount);
      setCartItem(cartresponse.data.data);
      setTrackData(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    rootApiData();
  }, []);

  return (
    <>
      <Router>
        <div className="ms_main_wrapper">
          <Sidebar
            cartItem={cartItem}
            isOpen={isOpen}
            sidebarOpen={sidebarOpen}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
            trackData={trackData}
          />
          <div
            class={
              isOpen
                ? "ms_content_wrapper padder_top80 ms_cont_left_marg"
                : "ms_content_wrapper padder_top80"
            }
          >
            <Header isOpen={isOpen} />
            {isLogin ? (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/songs/category"
                    element={<Song setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/songs/sub-category"
                    element={<Category setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/wrapin-music"
                    element={<WrapInMusic trackData={trackData} />}
                  />
                  <Route path="/testimonials" element={<Testimonialss />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/song-list" element={<CategoryDetails />} />
                  <Route path="/song-details" element={<MusicTemplete />} />
                  <Route
                    path="/message-placement"
                    element={<MessagePlacePage />}
                  />
                  <Route
                    path="/cart"
                    element={
                      <Cart
                        cartItem={cartItem}
                        rootApiData={rootApiData}
                        totalAmount={totalAmount}
                      />
                    }
                  />
                  <Route
                    path="/order-details"
                    element={
                      <MusicDetails
                        cartItem={cartItem}
                        rootApiData={rootApiData}
                      />
                    }
                  />
                  <Route path="/songs-details" element={<SongDetails />} />
                  <Route
                    path="/thankyou"
                    element={<ThankYou setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/my-account"
                    element={<MyAccount setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/payment/failed"
                    element={<Payment setIsLogin={setIsLogin} />}
                  />
                </Routes>
              </>
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Base />} />
                  <Route
                    path="/songs/category"
                    element={<Song setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/songs/sub-category"
                    element={<Category setIsLogin={setIsLogin} />}
                  />
                  <Route path="/wrapin-music" element={<WrapInMusic />} />
                  <Route path="/testimonials" element={<Testimonialss />} />
                  <Route path="/contact-us" element={<Contact />} />

                  <Route path="/song-list" element={<CategoryDetails />} />
                  <Route path="/song-details" element={<MusicTemplete />} />

                  <Route
                    path="/message-placement"
                    element={<MessagePlacePage />}
                  />
                  <Route path="/order-details" element={<MusicDetails />} />
                  <Route path="/songs-details" element={<SongDetails />} />

                  <Route
                    path="/thankyou"
                    element={<ThankYou setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/my-account"
                    element={<MyAccount setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/payment"
                    element={<Payment setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/signup"
                    element={<SignUp setIsLogin={setIsLogin} />}
                  />
                  <Route
                    path="/login"
                    element={
                      <Login
                        setCartItem={setCartItem}
                        setIsLogin={setIsLogin}
                      />
                    }
                  />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPassword setIsLogin={setIsLogin} />}
                  />
                </Routes>
              </>
            )}
          </div>
        </div>
        <Footer trackData={trackData} isOpen={isOpen} />
        {/* <AudioTrack tracks={tracks} musicIndex={musicIndex} /> */}
      </Router>
    </>
  );
};

export default AppRouter;
