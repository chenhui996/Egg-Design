import React from "react";

export interface TabItemProps {
  /** 选项卡头显示文字 */
  label: string | React.ReactElement;
  /** 是否禁用 */
  disabled?: boolean;
}

export const TabItem: React.FunctionComponent<TabItemProps> = (props) => {
  const { children } = props;
  // context
  return <div className="viking-tab-panel">{children}</div>;
};

TabItem.defaultProps={
  disabled:false
}

export default TabItem;
