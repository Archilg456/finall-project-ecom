import { Box, List, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SideBarHeader } from "./SideBarHeader";

export const SideBarContent = ({ sideBarItems }) => {
  return (
    <>
      <SideBarHeader />
      <List>
        {sideBarItems.map((item) => {
          const { _id, name } = item;
          return (
            <React.Fragment key={_id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/categories${name}?page=1&sort=price,desc`}
              >
                <Box
                  sx={{
                    display: "flex",
                    marginLeft: "2rem",
                    marginTop: "1.5rem",
                  }}
                >
                  <ListItemText secondary={name} />
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
