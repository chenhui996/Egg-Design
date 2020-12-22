import React, { useState } from "react";
import Button, { ButtonType } from "../Button/button";
import Alert from "./alert";

function ButtonShow() {
  const [alertShow, setAlertShow] = useState(false);
  const normalAlertShow = () => {
    alert("yep");
  };
  return (
    <>
      <div>
        --------------------------------------------------------------------------
      </div>
      <h1>Alert Show</h1>
      <Button onClick={normalAlertShow}>yep</Button>
      <Alert message="title" />
      <Alert
        message="message and description"
        description="message and description description"
      />
      <Alert message="closeBtn" description="closeBtn description" closable />
      {alertShow && (
        <Alert
          message="click show"
          description="click show description"
          closable
          active={alertShow}
          onClose={() => {
            setAlertShow(false);
          }}
        />
      )}
      <Button
        btnType={ButtonType.Primary}
        onClick={() => {
          setAlertShow(true);
        }}
      >
        click show Alert
      </Button>
    </>
  );
}

export default ButtonShow;
