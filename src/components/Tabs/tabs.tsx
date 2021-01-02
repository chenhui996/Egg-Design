import React, { useState, createContext } from "react";
import classNames from "classnames";

type SelectCallback = (selectIndex: string) => void;

export interface TabsProps {
  defaultIndex?: string;
  className?: string;
  onSelect?: SelectCallback;
}

interface ITabsContext {
  index: string;
  onClickSelect?: SelectCallback;
}

export const TabsContext = createContext<ITabsContext>({ index: "0" });

const Tabs: React.FunctionComponent<TabsProps> = (props) => {
  const { className, defaultIndex, onSelect, children } = props;
  // active
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  // classnames
  const tabsGlobalClass = "egg-tabs";
  const classes = classNames(tabsGlobalClass, className);

  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: ITabsContext = {
    index: currentActive ? currentActive : "0",
    onClickSelect: handleClick,
  };

  return (
    <div className={classes}>
      <TabsContext.Provider value={passedContext}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: "0",
};

export default Tabs;
