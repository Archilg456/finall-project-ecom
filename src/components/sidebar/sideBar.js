import { Drawer,  } from "@mui/material";
import React from "react";
import { useSideBarItems } from "../../redux";
import { SideBarContent } from "./SideBarContent";




export const SideBar = (drawerOpen, setDrawerOpen) => {
  const sideBarItems = useSideBarItems();

  return (
    <>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={setDrawerOpen(!drawerOpen)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SideBarContent sideBarItems={sideBarItems} />
      </Drawer>

      <Drawer
        variant="permanent"
        open
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SideBarContent sideBarItems={sideBarItems} />
      </Drawer>
    </>
  );
};
