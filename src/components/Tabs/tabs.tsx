import React, { useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";

type SelectCallBack = (selectIndex: number) => void;

export interface TabsProps {
  /** 设置默认激活的 TabsItem   */
  defaultIndex?: number;
  /** 自定义class名称 */
  className?: string;
  /** 被选中时调用 */
  onSelect?: SelectCallBack;
  /** 设置 Tabs 的样式类型 */
  type?: "line" | "card";
}

export const Tabs: React.FunctionComponent<TabsProps> = (props) => {
  const { defaultIndex, className, onSelect, type, children } = props;
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const tabsGlobalClass = "egg-tabs";
  const handleClick = (
    e: React.MouseEvent,
    index: number,
    disabled: boolean | undefined
  ) => {
    if (!disabled) {
      setCurrentActive(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };
  const navClass = classNames(`${tabsGlobalClass}-nav`, {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });
  const renderNavLink = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classNames(`${tabsGlobalClass}-nav-item`, {
        "is-active": currentActive === index,
        "disabled": disabled,
      });
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={(e) => {
            handleClick(e, index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContext = () => {
    return React.Children.map(children, (child, index) => {
      if (index === currentActive) {
        return child;
      }
    });
  };
  return (
    <div className={`${tabsGlobalClass} ${className}`}>
      <ul className={navClass}>{renderNavLink()}</ul>
      <div className={`${tabsGlobalClass}-content`}>{renderContext()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
};

export default Tabs;
