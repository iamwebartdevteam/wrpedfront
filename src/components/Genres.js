import React from "react";
import { Link } from "react-router-dom";
import { IMG, NOIMG } from "../api/constant";

const Genres = ({ tableData, cataNameSlg }) => {
  const subCataId = (data) => {
    localStorage.setItem("subCataId", data);
  };
  return (
    <>
      <div class="ms_genres_wrapper">
        <div class="row">
          <div class="col-lg-12">
            <div class="ms_heading">
              <h1>Type of Songs</h1>
              <span class="veiw_all">
                <a href="#">{tableData.length} results</a>
              </span>
            </div>
          </div>
          {tableData.map((item, index) => (
            <div class="col-lg-2" key={index}>
              <Link
                onClick={() => subCataId(item.id)}
                to="/song-list"
                state={{ id: item.id }}
              >
                <div class="ms_genres_box">
                  <img
                    src={item.image === "" ? NOIMG : IMG + item.image}
                    alt=""
                    class="img-fluid"
                  />
                  <div class="ms_main_overlay">
                    <div class="ms_box_overlay"></div>
                    {/* <div class="ms_play_icon">
                      <i class="bi bi-eye"></i>
                    </div> */}
                    <div class="ovrly_text_div">
                      <span class="ovrly_text1">
                        <a href="#">{item.name}</a>
                      </span>
                    </div>
                  </div>
                  {/* <div class="ms_box_overlay_on">
                    <div class="ovrly_text_div">
                      <span class="ovrly_text1">
                        <a href="#">{item.name}</a>
                      </span>
                    </div>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
