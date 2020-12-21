import React from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize; // defind 3
  btnType?: ButtonType; // defind 8
  children: React.ReactNode;
  href?: string;
}

const Button: React.FunctionComponent<BaseButtonProps> = (props) => {
  const { disabled, size, btnType, children, href } = props;
  // btn, btn-lg, btn-primary
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  // main
  if (btnType === ButtonType.Link && href) {
    return (
    <a
        className={classes}
        href={href}
    >
        {children}
    </a>);
  }
  else{
    return (
        <button
            className={classes}
            disabled={disabled}
        >
            {children}
        </button>
    )
  }
};

// normal
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;