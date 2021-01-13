import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  /** item 的唯一标志 */
  index?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义class名称 */
  className?: string;
  /** 根节点样式 */
  style?: React.CSSProperties;
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
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

MenuItem.defaultProps ={
  disabled: false
}

export default MenuItem;
