import React from "react";
import classNames from "classnames";

// export enum ButtonSize {
//   Large = "lg",
//   Small = "sm",
// }
export type ButtonSize = "lg" | "sm";

// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link",
// }
export type ButtonType = "primary" | "default" | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize; // defind 3
  btnType?: ButtonType; // defind 8
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
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
};

export default Button;
