import React from "react";
import Button from "./button";

function ButtonShow() {
  return (
    <>
    <div>--------------------------------------------------------------------------</div>
      <h1>Button Show</h1>
      {/* 1. Normal */}
      <Button autoFocus className="custom">
        Hello
      </Button>
      {/* 2. Disabled */}
      <Button disabled> Hello </Button>
      {/* 3. Enum Style */}
      <Button btnType="primary" size="lg">
        Large Primary
      </Button>
      <Button btnType="danger" size="sm">
        Small Danger
      </Button>
      {/* 4. Normal Link */}
      <Button
        btnType="link"
        href="http://www.baidu.com"
        size="sm"
        target="_blank"
      >
        {" "}
        Hello{" "}
      </Button>
      {/* 5. Disabled Link */}
      <Button
        btnType="link"
        href="http://www.baidu.com"
        size="sm"
        disabled
      >
        {" "}
        disabled Link{" "}
      </Button>
    </>
  );
}

export default ButtonShow;
