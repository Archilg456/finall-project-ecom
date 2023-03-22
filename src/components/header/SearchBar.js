import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { queryProducts, useSearchResults } from "../../redux";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
  const searchResult = useSearchResults();

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQuery) {
        dispatch(queryProducts(searchQuery));
      }
    }, 1500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);
  return (
    <Autocomplete
      freeSolo
      sx={{
        width: 700,
        background: "#fff",
        outline: "none",
      }}
      disableClearable
      options={searchResult}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, price, _id } = option;
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
            label="Search Products"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        );
      }}
    />
  );
};
