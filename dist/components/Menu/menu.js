import React, { useState, createContext } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
export var Menu = function (props) {
    var _a;
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _b = useState(defaultIndex), currentActive = _b[0], setCurrentActive = _b[1];
    var menuGlobalClass = "egg-menu";
    var classes = classNames(menuGlobalClass, className, (_a = {},
        _a[menuGlobalClass + "-" + mode] = mode,
        _a));
    var handleClick = function (index) {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onClickSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
            React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren()))));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: [],
};
export default Menu;
