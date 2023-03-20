import { Pagination } from "@mui/material";
import React from "react";

export const Paginate = ({ totalPages, currentPage, changePage }) => {
  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      count={totalPages}
      page={Number(currentPage)}
      onChange={(_, value) => {
        changePage("page", value);
      }}
    />
  );
};
