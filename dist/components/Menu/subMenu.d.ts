import React from "react";
export interface SubMenuProps {
    /** item 的唯一标志 */
    index?: string;
    /** 分组标题 */
    title: string;
    /** 自定义class名称 */
    className?: string;
}
export declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
