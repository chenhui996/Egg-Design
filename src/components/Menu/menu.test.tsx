import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";

import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

jest.mock('../Icon/icon', () => {
  return () => {
    return <i className="fa" />
  }
})
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props: any) => {
      return props.children
    }
  }
})

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  defaultOpenSubMenus: ["4"],
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>yep</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>opened1</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
  const cssFile: string = `
    .egg-submenu{
      display: none;
    }
    .egg-submenu.menu-opened{
      display: block;
    }
  `;

  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

let wrapper: RenderResult,
  wrapper2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component in default(horizontal) mode", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render corrent Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("egg-menu test egg-menu-horizontal");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(5);
    // active element
    expect(activeElement).toBeInTheDocument();
    expect(activeElement).toHaveClass("egg-menu-item is-active");
    // disabled element
    expect(disabledElement).toBeInTheDocument();
    expect(disabledElement).toHaveClass("egg-menu-item is-disabled");
  });
  it("click items should change active call the right callback", () => {
    const thirdItem = wrapper.getByText("yep");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
    expect(thirdItem).toHaveClass("is-active");
  });
  it("should show dropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("drop1")).not.toBeVisible();
    const dropdownElement = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => expect(wrapper.queryByText("drop1")).toBeVisible());
    fireEvent.click(wrapper.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => expect(wrapper.queryByText("drop1")).not.toBeVisible());
  });
});

describe("test Menu and MenuItem component in vertical mode", () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerProps));
    wrapper2.container.append(createStyleFile());
  });
  it("should render vertical mode when mode is set to vertical", () => {
    const menuElement = wrapper2.getByTestId("test-menu");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("egg-menu egg-menu-vertical");
  });
  it("should show dropdown items when click on subMenu", () => {
    const dropDownItem = wrapper2.queryByText("drop1");
    expect(wrapper2.container.querySelector(".egg-submenu")).not.toBeVisible();
    expect(dropDownItem).not.toBeVisible();
    fireEvent.click(wrapper2.getByText("dropdown"));
    expect(wrapper2.container.querySelector(".egg-submenu")).toBeVisible();
    expect(dropDownItem).toBeVisible();
  });
  it("should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index", () => {
    expect(wrapper2.queryByText("opened1")).toBeVisible();
  });
});
