import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledListItem = styled(ListItem)(() => ({
  pending: " 5px 0px 3px 15px",
  marging: "0px",
}));

export const SideBarContent = ({ sideBarItems }) => {
  return (
    <List>
      {sideBarItems.map((item) => {
        const { _id, name } = item;
        return (
          <React.Fragment key={_id}>
            <Link>
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
  );
};
