import { Box, List } from "@mui/material";
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
                    marginLeft: "1.2rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "13px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {name}
                  </h2>
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
