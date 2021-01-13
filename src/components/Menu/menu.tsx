import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
  /** 设置默认激活的 MenuItem   */
  defaultIndex?: string;
  /** 自定义class名称 */
  className?: string;
  /** 设置 Menu 的类型 */
  mode?: MenuMode;
  /** 根节点样式 */
  style?: React.CSSProperties;
  /** 被选中时调用 */
  onSelect?: SelectCallback;
  /** 初始展开的 SubMenu 菜单项 key 数组 */
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onClickSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

export const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const menuGlobalClass = "egg-menu";
  const classes = classNames(menuGlobalClass, className, {
    [`${menuGlobalClass}-${mode}`]: mode,
  });
  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onClickSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <>
      <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
