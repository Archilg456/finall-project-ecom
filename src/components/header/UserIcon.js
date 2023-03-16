import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../applications";
import { useUserInfo } from "../../redux";

export const UserIcon = () => {
  const [anchor, setAnchor] = useState(null);
  const userInfo = useUserInfo();
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>AG</Avatar>
      </IconButton>
      <Box>
        <Menu
          anchorEl={anchor}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "rigth",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          {!!userInfo ? (
            <MenuItem>
              <Button> Logout </Button>
            </MenuItem>
          ) : (
            <Box>
              <MenuItem>
                <Button onClick={() => navigate("/Login")}> LogIn </Button>
              </MenuItem>
              <MenuItem>
                <Button onClick={() => navigate("/register")}>
                  {" "}
                  Register{" "}
                </Button>
              </MenuItem>
            </Box>
          )}
          {isUserAdmin(userInfo) && (
            <MenuItem>
              <Button onClick={() => navigate("/products/new")}>
                Add Product
              </Button>
            </MenuItem>
          )}
        </Menu>
      </Box>
    </Box>
  );
};
