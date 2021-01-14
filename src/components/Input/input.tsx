import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /** 是否禁用 */
  disabled?: boolean;
  /** 设置尺寸 */
  size?: InputSize;
  /** 设置图标 */
  icon?: IconProp;
  /** 设置前置内容 */
  prepend?: string | ReactElement;
  /** 设置后置内容 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  // classnames
  const inputGlobalClass = "egg-input";
  const classes = classNames(`${inputGlobalClass}-wrapper`, {
    [`${inputGlobalClass}-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-prepend": !!prepend,
    "input-group-append": !!append,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={classes} style={style}>
      {prepend && (
        <div className={`${inputGlobalClass}-group-prepend`}>{prepend}</div>
      )}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        className={`${inputGlobalClass}-inner`}
        disabled={disabled}
        {...restProps}
      />
      {append && (
        <div className={`${inputGlobalClass}-group-append`}>{append}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  size: "sm",
};

export default Input;
