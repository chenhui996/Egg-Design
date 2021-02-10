import React, { FC } from "react";
export interface SelectProps {
    /** 指定默认选中的条目 可以是 '字符串' 或者 '字符串数组' */
    defaultValue?: string | string[];
    /** 选择框默认文字 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否支持多选 */
    multiple?: boolean;
    /** select input 的 name 属性 */
    name?: string;
    /** 选中值发生变化时触发 */
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    /** 下拉框出现/隐藏时触发 */
    onVisibleChange?: (visible: boolean) => boolean;
}
export interface ISelectContent {
    onSelect?: (value: string, isSelected?: boolean) => void;
    selectedValues: string[];
    multiple?: boolean;
}
export declare const SelectContext: React.Context<ISelectContent>;
export declare const Select: FC<SelectProps>;
export default Select;
