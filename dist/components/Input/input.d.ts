import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type InputSize = "lg" | "sm";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /** 是否禁用 */
    disabled?: boolean;
    /** 设置尺寸 */
    size?: InputSize;
    /** 设置图标 */
    icon?: IconProp;
    /** 设置前置内容 */
    prepend?: string | ReactElement;
    /** 设置后置内容 */
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FunctionComponent<InputProps>;
export default Input;
