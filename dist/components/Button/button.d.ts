import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    /** 自定义class名称 */
    className?: string;
    /** 设置 button 的禁用 */
    disabled?: boolean;
    /** 设置 button 的尺寸 */
    size?: ButtonSize;
    /** 设置 button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    /** 设置 button link 的链接 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
