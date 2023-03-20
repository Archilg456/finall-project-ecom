import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({ value, changeSort }) => {
  return (
    <Select
      sx={{ margin: "2rem" }}
      value={value ?? "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc"> ფასი ზრდადობით </MenuItem>
      <MenuItem value="price,desc"> ფასი კლებადობით </MenuItem>
      <MenuItem value="name,desc"> სახელი ზრდადობით </MenuItem>
      <MenuItem value="name,desc"> სახელი კლებადობით </MenuItem>
    </Select>
  );
};
