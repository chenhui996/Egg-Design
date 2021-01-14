import React from "react";
export interface TabItemProps {
    /** 选项卡头显示文字 */
    label: string | React.ReactElement;
    /** 是否禁用 */
    disabled?: boolean;
}
export declare const TabItem: React.FunctionComponent<TabItemProps>;
export default TabItem;
