import React from "react";
declare type SelectCallBack = (selectIndex: number) => void;
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
export declare const Tabs: React.FunctionComponent<TabsProps>;
export default Tabs;
