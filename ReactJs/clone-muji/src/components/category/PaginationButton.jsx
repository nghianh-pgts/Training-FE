import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationButton = () => {
  return (
    <div>
      <Pagination count={4} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PaginationButton;
