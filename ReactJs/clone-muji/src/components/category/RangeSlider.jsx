import * as React from "react";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <Slider
        sx={{
          color: "#80001c", // Màu chính của thanh trượt
          "& .MuiSlider-thumb": { backgroundColor: "#80001c" }, // Nút kéo
          "& .MuiSlider-track": { backgroundColor: "#80001c" }, // Thanh đã trượt
          "& .MuiSlider-rail": { backgroundColor: "#ddd" }, // Thanh chưa trượt
        }}
        size="small"
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
