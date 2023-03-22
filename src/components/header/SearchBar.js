import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const results = [];
  const [searchQuery, setSearchQuery] = useState("");
  console.log("searchQuery:", searchQuery);

  return (
    <Autocomplete
      freeSolo
      sx={{
        width: 700,
        background: "#fff",
        borderRadius: 5,
        outline: "none",
        margin: 2,
      }}
      disableClearable
      options={results}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, _id, category, price } = option;
        return (
          <Link
            to={`/products/categories/${category}/${name}`}
            key={_id}
            state={{ id: _id }}
          >
            <Box>
              <Typography>{name}</Typography>
              <Typography>{price}</Typography>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            label="Search"
            InputProps={{ ...params.inputProps, type: "search" }}
          />
        );
      }}
    />
  );
};
