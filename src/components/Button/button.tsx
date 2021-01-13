import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  /** 自定义class名称 */
  className?: string;
  /** 设置 button 的禁用 */
  disabled?: boolean;
  /** 设置 button 的尺寸 */
  size?: ButtonSize; // defind 3
  /** 设置 button 的类型 */
  btnType?: ButtonType; // defind 8
  children: React.ReactNode;
  /** 设置 button link 的链接 */
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    disabled,
    className,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  // main
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

// normal
Button.defaultProps = {
  disabled: false,
  btnType: "default",
  size: "sm",
};

export default Button;
