import React from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export interface BaseAlertProps {
  className?: string;
  message?: string;
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
      <Transition wrapper in={closed} timeout={300} animation="zoom-in-top">
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
                <Icon icon="times" theme="danger" size="1x" />
              </button>
            )}
          </div>
      </Transition>
    </>
  );
};

// normal
Alert.defaultProps = {
  alertType: AlertType.Success,
  closable: false,
  message: "请给message属性，并输入提示信息",
};

export default Alert;
