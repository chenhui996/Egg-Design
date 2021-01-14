import React, { useState } from "react";
import classNames from "classnames";
export var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, onSelect = props.onSelect, type = props.type, children = props.children;
    var _a = useState(defaultIndex), currentActive = _a[0], setCurrentActive = _a[1];
    var tabsGlobalClass = "egg-tabs";
    var handleClick = function (e, index, disabled) {
        if (!disabled) {
            setCurrentActive(index);
            if (onSelect) {
                onSelect(index);
            }
        }
    };
    var navClass = classNames(tabsGlobalClass + "-nav", {
        "nav-line": type === "line",
        "nav-card": type === "card",
    });
    var renderNavLink = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var _a = childElement.props, label = _a.label, disabled = _a.disabled;
            var classes = classNames(tabsGlobalClass + "-nav-item", {
                "is-active": currentActive === index,
                "disabled": disabled,
            });
            return (React.createElement("li", { className: classes, key: "nav-item-" + index, onClick: function (e) {
                    handleClick(e, index, disabled);
                } }, label));
        });
    };
    var renderContext = function () {
        return React.Children.map(children, function (child, index) {
            if (index === currentActive) {
                return child;
            }
        });
    };
    return (React.createElement("div", { className: tabsGlobalClass + " " + className },
        React.createElement("ul", { className: navClass }, renderNavLink()),
        React.createElement("div", { className: tabsGlobalClass + "-content" }, renderContext())));
};
Tabs.defaultProps = {
    defaultIndex: 0,
    type: "line",
};
export default Tabs;
