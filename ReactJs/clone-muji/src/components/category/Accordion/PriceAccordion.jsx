import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import RangeSlider from "../RangeSlider";

const PriceAccordion = () => {
  return (
    <>
      <Accordion
        defaultExpanded
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          borderBottom: "1px solid #ddd",
          marginBottom: "4px",
        }}
      >
        <AccordionSummary expandIcon={<MdExpandMore />} id="panel1-header">
          <Typography sx={{ fontWeight: "bold" }} component="span">
            giá
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex w-full justify-between gap-2">
            <input
              type="number"
              className="w-1/2 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="15.000"
            />
            <span>-</span>
            <input
              type="number"
              className="w-1/2 px-2 py-1 border border-gray-300 rounded-md text-sm "
              placeholder="5.890.000"
            />
          </div>
          <RangeSlider />
          <div className="flex w-full justify-between font-normal">
            <span className="text-11px">15.000</span>
            <span className="text-11px">5.890.000</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PriceAccordion;
