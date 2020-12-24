import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";

function MenuShow() {
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Menu Show</h1>
      <Menu defaultIndex={0}>
          <MenuItem>
          cool link1
          </MenuItem>
          <MenuItem>
          cool link2
          </MenuItem>
          <MenuItem>
          cool link3
          </MenuItem>
      </Menu>
    </>
  );
}

export default MenuShow;