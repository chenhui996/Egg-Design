import React, { useContext } from 'react';
import classNames from 'classnames';
import { TabsContext } from './tabs';

export interface TabItemProps{
    index?: string;
    disabled?: boolean;
    className?: string;
    tab?: string | number;
}

const TabItem: React.FunctionComponent<TabItemProps> = (props) => {
    const { index, className, disabled, tab } = props;
    // context
    const context = useContext(TabsContext);
    // classnames
    const tabItemGlobal: string = "egg-tab-item";
    const classes = classNames(tabItemGlobal, className, {
        'is-active': context.index === index,
        'is-disabled': disabled
    });

    const handleClick = () => {
        if(context.onClickSelect && !disabled && (typeof index==='string')){
            context.onClickSelect(index);
        }
    }

    return (
        <div>
            <h1>TabItem</h1>
        </div>
    )
}