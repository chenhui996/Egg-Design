import React from "react";
// import { fireEvent, render } from "@testing-library/react";
import Input, { InputProps } from "./input";

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: "test-input",
};

describe("test Input component", () => {
  it("should render the correct default Input", () => {});
  it("should render the disabled Input on disabled property", () => {});
  it("should render different input sizes on size property", () => {});
  it("should render prepand and append element on prepand/append property", () => {});
});
