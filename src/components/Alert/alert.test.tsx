import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert, { AlertType, BaseAlertProps } from "./alert";

const testProps: BaseAlertProps = {
  alertType: AlertType.Info,
  className: "klass",
  message: "testProps",
  description: "testProps description",
  closable: true,
  onClose: jest.fn(),
};

// 分类
describe("test Alert component", () => {
  // it or test effect same
  it("should render the current default alert", () => {
    const wrapper = render(<Alert></Alert>);
    // box
    const elementBox = wrapper.container.querySelector(
      ".egg-alert"
    ) as HTMLBaseElement;
    expect(elementBox).toBeInTheDocument();
    expect(elementBox.tagName).toEqual("DIV");
    expect(elementBox).toHaveClass("egg-alert egg-alert-success");
    expect(elementBox).not.toHaveAttribute("closable");
    // message
    const elementMessage = wrapper.container.querySelector(
      ".egg-alert-message"
    ) as HTMLBaseElement;
    expect(elementMessage).toBeInTheDocument();
    expect(elementMessage.tagName).toEqual("DIV");
    expect(elementMessage).toHaveTextContent("请给message属性，并输入提示信息");
    // description
    const elementDescription = wrapper.container.querySelector(
      ".egg-alert-description"
    ) as HTMLBaseElement;
    expect(elementDescription).toBeInTheDocument();
    expect(elementDescription.tagName).toEqual("DIV");
    expect(elementDescription).not.toHaveTextContent(" "); // 当dom不含有文本内容, 默认含有空格
    // button
  });
  it("should render the currect component based on different props", () => {
    const wrapper = render(<Alert {...testProps}></Alert>);
    // box
    const elementBox = wrapper.container.querySelector(
      ".egg-alert"
    ) as HTMLBaseElement;
    expect(elementBox).toBeInTheDocument();
    expect(elementBox.tagName).toEqual("DIV");
    expect(elementBox).toHaveClass("egg-alert egg-alert-info");

    // message
    const elementMessage = wrapper.getByText("testProps") as HTMLButtonElement;
    expect(elementMessage).toBeInTheDocument();
    expect(elementMessage).toHaveClass("egg-alert-message");
    // description
    const elementDescription = wrapper.getByText(
      "testProps description"
    ) as HTMLButtonElement;
    expect(elementDescription).toBeInTheDocument();
    expect(elementDescription).toHaveClass("egg-alert-description");
    // button
    const elementBtn = wrapper.getByText("关闭") as HTMLButtonElement;
    expect(elementBtn).toBeInTheDocument();
    expect(elementBtn).toHaveClass("egg-alert-btn");
    // onClick
    fireEvent.click(elementBtn);
    expect(testProps.onClose).toHaveBeenCalled();
  });
});
