import React from "react";
export interface MenuItemProps {
    /** item 的唯一标志 */
    index?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 自定义class名称 */
    className?: string;
    /** 根节点样式 */
    style?: React.CSSProperties;
}
export declare const MenuItem: React.FunctionComponent<MenuItemProps>;
export default MenuItem;
