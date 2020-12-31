import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);
  const menuItemNormalClass = "egg-menu-item";
  const classes = classNames(menuItemNormalClass, className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onClickSelect && !disabled && (typeof index === 'string')) {
      context.onClickSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
 
MenuItem.displayName = "MenuItem";

export default MenuItem;
