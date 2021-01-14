import React from "react";
declare type MenuMode = "horizontal" | "vertical";
declare type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
    /** 设置默认激活的 MenuItem   */
    defaultIndex?: string;
    /** 自定义class名称 */
    className?: string;
    /** 设置 Menu 的类型 */
    mode?: MenuMode;
    /** 根节点样式 */
    style?: React.CSSProperties;
    /** 被选中时调用 */
    onSelect?: SelectCallback;
    /** 初始展开的 SubMenu 菜单项 key 数组 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onClickSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: React.FunctionComponent<MenuProps>;
export default Menu;
