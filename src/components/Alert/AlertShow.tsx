import React, { useState } from "react";
import Button from "../Button/button";
import Alert, { AlertType } from "./alert";
import Transition from "../Transition/transition";

function ButtonShow() {
  const [alertShow, setAlertShow] = useState(false);
  const normalAlertShow = () => {
    alert("yep");
  };
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Alert Show</h1>
      <Button onClick={normalAlertShow}>yep</Button>
      <br />
      --------------------------------------------------------------------------
      <Alert />
      <Alert message="title" />
      <br />
      --------------------------------------------------------------------------
      <Alert
        message="success"
        description="message and description description"
      />
      <br />
      --------------------------------------------------------------------------
      <Alert
        message="Info"
        description="message and description description"
        alertType={AlertType.Info}
      />
      <br />
      --------------------------------------------------------------------------
      <Alert
        message="Warning"
        description="message and description description"
        alertType={AlertType.Warning}
      />
      <br />
      --------------------------------------------------------------------------
      <Alert
        message="Error"
        description="message and description description"
        alertType={AlertType.Error}
      />
      <br />
      --------------------------------------------------------------------------
      <Alert message="closeBtn" description="closeBtn description" closable />
      <br />
      --------------------------------------------------------------------------
      <div>
        <Transition
          in={alertShow}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Alert
            message="click show"
            description="click show description"
            closable
            active={alertShow}
            onClose={() => {
              setAlertShow(false);
            }}
          />
        </Transition>
        <Button
          btnType="primary"
          onClick={() => {
            setAlertShow(true);
          }}
        >
          click show Alert
        </Button>
      </div>
    </>
  );
}

export default ButtonShow;
