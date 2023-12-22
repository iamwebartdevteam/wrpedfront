import React, { useEffect, useState } from "react";
import Genres from "../components/Genres";
import SongCarousal from "../components/SongCarousal";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useNavigate } from "react-router";
const Category = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [catagoriMain, setCatagoriMain] = useState([]);
  const [categoriData, setCategoriData] = useState("");
  const [tableData, setTableData] = useState([]);
  const [cataNameSlg, setCataNameSlg] = useState("");

  const [dataArry, setDataArry] = useState([]);

  const activeButton = () => {
    setIsActive(false);
    setCataNameSlg("All");
    setCategoriData("");
    getAll_subcatagori();
  };

  const getAll_subcatagori = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.getMain_subCategory(header);
      console.log("responseCata", response);
      if (response.data.success === 1) {
        setTableData(response.data.data);
      } else {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };

  const categoriy_details = async (catid, cataName) => {
    const header = localStorage.getItem("_tokenCode");
    setIsActive(true);
    setCategoriData(catid);
    setCataNameSlg(cataName);
    dataArry.includes(catid) == false
      ? dataArry.push(catid)
      : dataArry.splice(dataArry.indexOf(catid), 1);

    try {
      const reQobj = {
        category_id: dataArry.toString(),
      };
      console.log("reQobj", reQobj);
      if (reQobj.category_id === "") {
        setIsActive(false);
        getAll_subcatagori();
      }
      const response = await API.subCategoryId(reQobj, header);
      console.log("responseddd", response);
      setTableData(response.data.data);
    } catch (error) {}
  };

  const get_categoryList = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_subCategory(header);
      console.log("get_categoryList", response);
      if (response.data.success === 1) {
        //setCatagoriMain(response.data.data);
      } else {
        // localStorage.removeItem("_tokenCode");
        // localStorage.removeItem("isLogin");
        // setIsLogin(localStorage.removeItem("isLogin"));
        // if (localStorage.getItem("isLogin") === null) {
        //   navigate("/login");
        // }
      }
    } catch (error) {}
  };

  useEffect(() => {
    get_categoryList();
    getAll_subcatagori();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <InnerBanner /> */}
      <div class="ms_genres_wrapper  mt-0">
        <div class="row justify-content-center">
          {/* <div className="col-md-12">
            <h2 className="text-center songHead">Songs Selection</h2>
          </div> */}
          <div class="col-md-7 cataTeb">
            <ul
              class="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={() => categoriy_details("4")}
                >
                  All
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Genre
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Occasion
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-mood-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-mood"
                  type="button"
                  role="tab"
                  aria-controls="pills-mood"
                  aria-selected="false"
                >
                  Mood
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-mood"
                role="tabpanel"
                aria-labelledby="pills-mood-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>

            <div class="cat action">
              <label onClick={activeButton} class={isActive ? "" : "active"}>
                <span>All</span>
              </label>
              <label onClick={activeButton} class={isActive ? "" : "active"}>
                <span>Genre</span>
              </label>
              <label onClick={activeButton} class={isActive ? "" : "active"}>
                <span>Occasion</span>
              </label>
              <label onClick={activeButton} class={isActive ? "" : "active"}>
                <span>Mood</span>
              </label>
              {/* {catagoriMain.map((item, index) => (
                <>
                  <label key={index}>
                    <input
                      onChange={() => categoriy_details(item.id, item.name)}
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                    />
                    <span>{item.name}</span>
                  </label>
                </>
              ))} */}
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div className="col-md-5">
            <div class="srhbyx">
              <input
                type="text"
                class="form-control"
                placeholder="Search Songs"
              />
              <div class="icnprty">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        {tableData === "" || tableData === undefined ? (
          ""
        ) : (
          <Genres cataNameSlg={cataNameSlg} tableData={tableData} />
        )}

        {/* <SongCarousal cateTitle="Popular Occasions" /> */}
      </div>
    </>
  );
};

export default Category;
