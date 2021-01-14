import React from "react";
export var TabItem = function (props) {
    var children = props.children;
    // context
    return React.createElement("div", { className: "viking-tab-panel" }, children);
};
TabItem.defaultProps = {
    disabled: false
};
export default TabItem;
