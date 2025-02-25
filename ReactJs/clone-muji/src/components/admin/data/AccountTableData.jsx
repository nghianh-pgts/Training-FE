import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LiaEditSolid } from "react-icons/lia";
import { MdLockReset, MdOutlineDeleteForever } from "react-icons/md";
import ToggleSwitch from "../UI/ToggleSwitch";

const AccountTableData = ({ data, colTitles, handleResetPassword }) => {
  return (
    <>
      {" "}
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
            {data?.map((row) => (
              <TableRow
                key={row?.userId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={row?.isActive === false ? "" : ""}
              >
                <TableCell
                  align="right"
                  component="th"
                  scope="row"
                  className="truncate max-w-4 text-left"
                >
                  {row?.userId}
                </TableCell>
                <TableCell
                  align="right"
                  component="th"
                  scope="row"
                  className="min-w-5 text-nowrap text-left"
                >
                  {row?.fullName}
                </TableCell>
                <TableCell align="right">{row?.email}</TableCell>
                <TableCell
                  align="right"
                  //   sx={{
                  //     overflow: "hidden",
                  //     maxWidth: "15px",
                  //     textOverflow: "ellipsis",
                  //   }}
                  className="truncate max-w-4 text-left"
                >
                  {row?.password}
                </TableCell>
                <TableCell align="right">{row?.phone}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row?.dob}</TableCell>
                <TableCell align="right">{row?.created_at}</TableCell>
                <TableCell className="ml-auto">
                  <div>
                    {
                      <ToggleSwitch
                        isActiveInit={row?.isActive}
                        className="ml-auto"
                        userId={row?.userId}
                      />
                    }
                  </div>
                </TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">
                  <div className="flex gap-2 justify-end">
                    <button
                      className="rounded-md second-primary-bg-color px-4 py-2 text-xs font-semibold hover-primary-bg-color flex items-center gap-2"
                      onClick={() => handleResetPassword(row?.userId)}
                    >
                      <MdLockReset className="text-xl" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AccountTableData;
