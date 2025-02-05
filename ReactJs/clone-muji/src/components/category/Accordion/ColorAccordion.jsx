import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const ColorAccordion = () => {
  return (
    <div>
      <Accordion
        sx={{
          boxShadow: "none",
          "&:before": { display: "none" },
          borderBottom: "1px solid #ddd",
          marginBottom: "4px",
        }}
      >
        <AccordionSummary expandIcon={<MdExpandMore />} id="panel1-header">
          <Typography sx={{ fontWeight: "bold" }} component="span">
            Màu sắc
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex w-full flex-wrap gap-2 font-normal">
            <button className="w-11 h-11 rounded-full ">
              <img
                src="https://api.muji.com.vn/media/attribute/swatch/swatch_image/30x20/0/0/007_charcoal_grey.png"
                alt=""
                className="object-cover rounded-full"
              />
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ColorAccordion;
