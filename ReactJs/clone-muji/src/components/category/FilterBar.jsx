import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import PriceAccordion from "./Accordion/PriceAccordion";
import SizeAccordion from "./Accordion/SizeAccordion";
import ColorAccordion from "./Accordion/ColorAccordion";
import MaterialAccordion from "./Accordion/MaterialAccordion";

const FilterBar = () => {
  return (
    <div className="w-[20%] flex flex-col font-bold">
      <div className="flex items-center gap-2 text-[19px]">
        <span className="text-2xl">
          <GiSettingsKnobs />
        </span>
        <p>Bộ lọc</p>
      </div>
      <div className="mt-4">
        <PriceAccordion />
        <SizeAccordion />
        <ColorAccordion />
        <MaterialAccordion />
      </div>
    </div>
  );
};

export default FilterBar;
