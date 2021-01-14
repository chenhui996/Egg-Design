import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var menuItemNormalClass = "egg-menu-item";
    var classes = classNames(menuItemNormalClass, className, {
        "is-disabled": disabled,
        "is-active": context.index === index,
    });
    var handleClick = function () {
        if (context.onClickSelect && !disabled && (typeof index === 'string')) {
            context.onClickSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = "MenuItem";
MenuItem.defaultProps = {
    disabled: false
};
export default MenuItem;
