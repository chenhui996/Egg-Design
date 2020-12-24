import React from "react";
import classNames from "classnames";

export interface MenuItemProps{
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const menuItemNormalClass = "egg-menu-item";
    const classes = classNames(menuItemNormalClass, className, {
        'is-disabled': disabled,
    });

    return (<li className={classes} style={style}>
        {children}
    </li>)
}

export default MenuItem;