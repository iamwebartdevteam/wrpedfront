import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
const Faq = ({ tableData }) => {
  return (
    <>
      <div class="ms_genres_wrapper">
        <div class="row">
          <div class="ms_heading">
            <h1>FAQ</h1>
          </div>
          <div class="col-md-12">
            <Accordion>
              {tableData.map((item, index) => (
                <AccordionItem header={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
