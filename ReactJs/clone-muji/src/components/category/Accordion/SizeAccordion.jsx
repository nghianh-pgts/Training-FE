import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SizeAccordion = () => {
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
            Kích cỡ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex w-full flex-col font-normal">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="110" />
              <FormControlLabel control={<Checkbox />} label="120" />
              <FormControlLabel control={<Checkbox />} label="130" />
              <FormControlLabel control={<Checkbox />} label="140" />
              <FormControlLabel control={<Checkbox />} label="150" />
              <FormControlLabel control={<Checkbox />} label="160" />
            </FormGroup>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SizeAccordion;
