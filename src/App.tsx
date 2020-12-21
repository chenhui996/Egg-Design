import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <>
      {/* 1. Normal */}
      <Button> Hello </Button>
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

export default App;
