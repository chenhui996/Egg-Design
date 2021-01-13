import React, { useState } from "react";
import Transition from "./transition";
import Button from "../Button/button";

const TransitionShow = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Transition Show</h1>
      <Button
        size="lg"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-top" wrapper>
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <Button btnType="primary" size="lg">
          A Large Buttom
        </Button>
      </Transition>
    </>
  );
};

export default TransitionShow;
