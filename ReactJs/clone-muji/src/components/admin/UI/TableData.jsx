import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever, MdOutlineDeleteForever } from "react-icons/md";

const TableData = ({
  colTitles,
  data,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {colTitles.map((name) => (
              <TableCell align="right" sx={{ fontWeight: "bold" }} key={name}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="right"
                component="th"
                scope="row"
                className="truncate max-w-4 text-left"
              >
                {row.productId}
              </TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">
                <img
                  className="ml-auto"
                  src={row.image}
                  alt=""
                  height={30}
                  width={30}
                />
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">
                {row.subcategory.subCategoryName}
              </TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">
                <div className="flex gap-2 justify-end">
                  <button
                    className="rounded-md bg-yellow-300 px-4 py-2 text-xs font-semibold hover-primary-bg-color flex items-center gap-2"
                    onClick={() => handleOpenEditModal(row)}
                  >
                    <LiaEditSolid />
                  </button>
                  <button
                    className="rounded-md bg-red-500 px-4 py-2 text-xs font-semibold hover-primary-bg-color flex items-center gap-2"
                    onClick={() => handleOpenDeleteModal(row)}
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
