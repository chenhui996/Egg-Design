import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
    /** 自定义 Icon 组件的类型*/
    theme ?: ThemeProps;
}

export const Icon: React.FunctionComponent<IconProps> = (props) => {
    // icon-primary
    const { className, theme, ...restProps } = props;
    const iconGlobalClass = "egg-icon"
    const classes = classNames(iconGlobalClass, className, {
        [`icon-${theme}`]: theme,
    });
    return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon;
