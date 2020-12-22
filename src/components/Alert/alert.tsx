import React from "react";
import classNames from "classnames";

export enum AlertType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseAlertProps {
  className?: string;
  message: string;
  description?: string;
  alertType?: AlertType;
  closable?: boolean;
  active?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Alert: React.FunctionComponent<BaseAlertProps> = (props) => {
  const {
    className,
    message,
    description,
    alertType,
    closable,
    active,
    onClose,
  } = props;
  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
  });

  return (
    <>
      {active && (
        <div className={classes}>
          <div>
            <div>{message}</div>
            <div>{description}</div>
          </div>
          {closable && (
            <button
              onClick={(e) => {
                onClose && onClose(e);
              }}
            >
              关闭
            </button>
          )}
        </div>
      )}
    </>
  );
};

// normal
Alert.defaultProps = {
  alertType: AlertType.Default,
  closable: false,
  active: true,
};

export default Alert;
