import "../src/styles/index.scss";
import React from "react";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const wrapperStyle: React.CSSProperties = {
  // margin: '5px 10px'
  opacity: 1,
}

const titleStyle: React.CSSProperties = {
  margin: '15px 0px'
}

const storyWrapper = (storyFn: any) => (
  <div className="storybook-demo" style={wrapperStyle}>
    <h5 style={titleStyle}>组件演示</h5>
    {storyFn()}
  </div>
)

addDecorator(storyWrapper)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    inline: true,
    header: false
  },
});
