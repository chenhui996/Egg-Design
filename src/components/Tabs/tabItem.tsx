import React from "react";

export interface TabItemProps {
    label: string | React.ReactElement;
    disabled?: boolean;
}

const TabItem: React.FunctionComponent<TabItemProps> = (props) => {
  const { children } = props;
  // context
  return (
    <div className="viking-tab-panel">
      {children}
    </div>
  );
};

export default TabItem;
