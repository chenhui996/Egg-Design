import React, { useContext } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { SelectContext } from "./select";
export var Option = function (props) {
    var value = props.value, label = props.label, disabled = props.disabled, children = props.children, index = props.index;
    var _a = useContext(SelectContext), onSelect = _a.onSelect, selectedValues = _a.selectedValues, multiple = _a.multiple;
    var isSelected = selectedValues.includes(value);
    var selectGlobal = "egg-select";
    var classes = classNames(selectGlobal + "-item", {
        "is-disabled": disabled,
        "is-selected": isSelected,
    });
    var handleClick = function (e, value, isSelected) {
        e.preventDefault();
        if (onSelect && !disabled) {
            onSelect(value, isSelected);
        }
    };
    return (React.createElement("li", { key: index, className: classes, onClick: function (e) {
            handleClick(e, value, isSelected);
        } },
        children || (label ? label : value),
        multiple && isSelected && React.createElement(Icon, { icon: "check" })));
};
Option.displayName = "Option";
export default Option;
