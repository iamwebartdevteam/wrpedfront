import React, { useEffect, useState } from "react";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import * as API from "../api/index";
const Testimonialss = () => {
  const [tableData, setTableData] = useState([]);
  const testamonialAndFaq = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.getfaqdata(header);
      console.log("response", response);
      if (response.data.success === 1) {
        setTableData(response.data.data);
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {
    testamonialAndFaq();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Testimonials />
      <Faq tableData={tableData} />
    </>
  );
};

export default Testimonialss;
