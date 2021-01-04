import React from "react";
import Tabs from "./tabs";
import TabItem from "./tabItem";

function callback(key: string | number) {
    console.log(key, typeof key);
  }

function TabsShow() {
  return (
    <>
      <br />
      --------------------------------------------------------------------------
      <h1>Tabs Show</h1>
      <Tabs>
        <TabItem label="tab1">
          <h1>111</h1>
        </TabItem>
        <TabItem label="tab2" disabled>
          <p>2</p>
        </TabItem>
        <TabItem label="tab3">
          <p>3</p>
        </TabItem>
      </Tabs>
      <br />
      --------------------------------------------------------------------------
      <Tabs type="card" onSelect={callback}>
        <TabItem label="tab1">
          <h1>111</h1>
        </TabItem>
        <TabItem label="tab2" disabled>
          <p>2</p>
        </TabItem>
        <TabItem label="tab3">
          <p>3</p>
        </TabItem>
      </Tabs>
    </>
  );
}

export default TabsShow;
