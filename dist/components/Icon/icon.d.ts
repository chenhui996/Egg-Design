import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    /** 自定义 Icon 组件的类型*/
    theme?: ThemeProps;
}
export declare const Icon: React.FunctionComponent<IconProps>;
export default Icon;
