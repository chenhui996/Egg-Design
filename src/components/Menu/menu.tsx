import React, { useState, createContext } from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props;
  const [ currentActive, setCurrentActive ] = useState(defaultIndex);
  const menuGlobalClass = "egg-menu";
  const classes = classNames(menuGlobalClass, className, {
    [`${menuGlobalClass}-${mode}`]: mode,
  });
  return (
    <>
      <ul className={classes} style={style}>
        {children}
      </ul>
    </>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
