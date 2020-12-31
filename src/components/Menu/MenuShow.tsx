import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

function MenuShow() {
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Menu Show</h1>
      <Menu
        defaultIndex={'0'}
        onSelect={(index) => {
          alert(index);
        }}
        mode={"vertical"}
      >
        <MenuItem>cool link0</MenuItem>
        <MenuItem>cool link1</MenuItem>
        <MenuItem>cool link2</MenuItem>
        <MenuItem disabled>cool link3</MenuItem>
        <MenuItem>cool link4</MenuItem>
      </Menu>
      <br />
      --------------------------------------------------------------------------
      <Menu
        defaultIndex={'0'}
        onSelect={(index) => {
          alert(index);
        }}
        mode={"vertical"}
        defaultOpenSubMenus={['1']}
      >
        <MenuItem>cool link0</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>submenu 01</MenuItem>
          <MenuItem>submenu 02</MenuItem>
        </SubMenu>
        <MenuItem>cool link2</MenuItem>
      </Menu>
      <br />
      --------------------------------------------------------------------------
      <Menu
        defaultIndex={'0'}
        onSelect={(index) => {
          alert(index);
        }}
        // mode={"vertical"}
      >
        <MenuItem>cool link0</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>submenu 01</MenuItem>
          <MenuItem>submenu 02</MenuItem>
        </SubMenu>
        <MenuItem>cool link2</MenuItem>
      </Menu>
    </>
  );
}

export default MenuShow;
