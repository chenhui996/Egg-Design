import React from "react";
import Button, { ButtonType, ButtonSize } from "./button";

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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      {/* 4. Normal Link */}
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        size={ButtonSize.Small}
        target="_blank"
      >
        {" "}
        Hello{" "}
      </Button>
      {/* 5. Disabled Link */}
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        size={ButtonSize.Small}
        disabled
      >
        {" "}
        disabled Link{" "}
      </Button>
    </>
  );
}

export default ButtonShow;
