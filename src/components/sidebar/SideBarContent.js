import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SideBarHeader } from "./SideBarHeader";

const StyledListItem = styled(ListItem)(() => ({
  pending: " 5px 0px 3px 15px",
  merging: "0px",
}));

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
                <Box sx={{ display: "flex" }}>
                  <StyledListItem>
                    <ListItemText secondary={name} />
                  </StyledListItem>
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
