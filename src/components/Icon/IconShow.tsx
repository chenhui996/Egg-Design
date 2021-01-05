import React from "react";
import Icon from "./icon";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


const IconShow = () => {
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Icon Show</h1>
      <Icon icon="coffee" theme="danger" size="10x" />
    </>
  );
};

export default IconShow;
