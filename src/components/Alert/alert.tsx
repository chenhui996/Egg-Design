import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
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
    onClose,
  } = props;
  const alertGlobalClass = "egg-alert";
  const classes = classNames(alertGlobalClass, className, {
    [`${alertGlobalClass}-${alertType}`]: alertType,
  });
  const [closed, setClosed] = React.useState(true);

  return (
    <>
      {closed && (
        <div className={classes}>
          <div>
            <div className={`${alertGlobalClass}-message`}>{message}</div>
            <div className={`${alertGlobalClass}-description`}>
              {description}
            </div>
          </div>
          {closable && (
            <button
              className={`${alertGlobalClass}-btn`}
              onClick={(e) => {
                setClosed(false);
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
  alertType: AlertType.Success,
  closable: false,
};

export default Alert;
