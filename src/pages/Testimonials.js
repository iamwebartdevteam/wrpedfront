import React, { useEffect } from "react";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

const Testimonialss = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Testimonials />
      <Faq />
    </>
  );
};

export default Testimonialss;
