var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState, createContext, useRef, useEffect, } from "react";
import classNames from "classnames";
import Input from "../Input";
import Icon from "../Icon";
import useClickOutside from "../../hooks/useClickOutside";
import Transition from "../Transition";
export var SelectContext = createContext({
    selectedValues: [],
});
export var Select = function (props) {
    var defaultValue = props.defaultValue, placeholder = props.placeholder, disabled = props.disabled, multiple = props.multiple, name = props.name, onChange = props.onChange, onVisibleChange = props.onVisibleChange, children = props.children;
    var selectGlobal = "egg-select";
    var input = useRef(null);
    var containerRef = useRef(null);
    var containerWidth = useRef(0);
    var _a = useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var _b = useState(Array.isArray(defaultValue) ? defaultValue : []), selectedValues = _b[0], setSelectedValues = _b[1];
    var _c = useState(typeof defaultValue === "string" ? defaultValue : ""), value = _c[0], setValue = _c[1];
    var handleOptionClick = function (value, isSelected) {
        // update value
        if (!multiple) {
            setMenuOpen(false);
            setValue(value);
            if (onVisibleChange) {
                onVisibleChange(false);
            }
        }
        else {
            setValue("");
        }
        var updatedValue = [value];
        // click again to remove selected when is multiple mode
        if (multiple) {
            // 更新updatedValue
            updatedValue = isSelected
                ? selectedValues.filter(function (v) { return v !== value; })
                : __spreadArrays(selectedValues, [value]);
            setSelectedValues(updatedValue);
        }
        if (onChange) {
            onChange(value, updatedValue);
        }
    };
    useEffect(function () {
        // focus input
        if (input.current) {
            input.current.focus();
            if (multiple && selectedValues.length > 0) {
                input.current.placeholder = "";
            }
            else {
                if (placeholder) {
                    input.current.placeholder = placeholder;
                }
            }
        }
    }, [selectedValues, multiple, placeholder]);
    useEffect(function () {
        if (containerRef.current) {
            containerWidth.current = containerRef.current.getBoundingClientRect().width;
        }
    });
    useClickOutside(containerRef, function () {
        setMenuOpen(false);
        if (onVisibleChange && menuOpen) {
            onVisibleChange(false);
        }
    });
    var passedContext = {
        onSelect: handleOptionClick,
        selectedValues: selectedValues,
        multiple: multiple,
    };
    var handleClick = function (e) {
        e.preventDefault();
        if (!disabled) {
            setMenuOpen(!menuOpen);
            if (onVisibleChange) {
                onVisibleChange(!menuOpen);
            }
        }
    };
    // 下拉框内容
    var generateOptions = function () {
        return React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "Option") {
                return React.cloneElement(childElement, {
                    index: "select-" + i,
                });
            }
            else {
                console.error("Warning: Select has a child which is not a Option component");
            }
        });
    };
    var containerClass = classNames(selectGlobal, {
        "menu-is-open": menuOpen,
        "is-disabled": disabled,
        "is-multiple": multiple,
    });
    return (React.createElement("div", { className: containerClass, ref: containerRef },
        React.createElement("div", { className: selectGlobal + "-input", onClick: handleClick },
            React.createElement(Input, { ref: input, placeholder: placeholder, value: value, readOnly: true, icon: "angle-down", disabled: disabled, name: name })),
        React.createElement(SelectContext.Provider, { value: passedContext },
            React.createElement(Transition, { in: menuOpen, animation: "zoom-in-top", timeout: 300 },
                React.createElement("ul", { className: selectGlobal + "-dropdown" }, generateOptions()))),
        multiple && (React.createElement("div", { className: selectGlobal + "ed-tags", style: { maxWidth: containerWidth.current - 32 } }, selectedValues.map(function (value, index) {
            return (React.createElement("span", { className: "egg-tag", key: "tag-" + index },
                value,
                React.createElement(Icon, { icon: "times", onClick: function () {
                        handleOptionClick(value, true);
                    } })));
        })))));
};
Select.defaultProps = {
    name: "egg-select",
    placeholder: "请选择",
};
export default Select;
