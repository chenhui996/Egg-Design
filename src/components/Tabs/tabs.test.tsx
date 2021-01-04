import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tabs, { TabsProps } from './tabs';
import TabsItem from './tabItem';

const testProps: TabsProps = {
    defaultIndex: 1,
    onSelect: jest.fn()
}

const generateTabs = (props: TabsProps) => {
    return (
        <Tabs {...props}>
            <TabsItem label="tab1">content1</TabsItem>
            <TabsItem label="tab2">content2</TabsItem>
            <TabsItem label="disabled" disabled>content3</TabsItem>
        </Tabs>
    )
}

let wrapper: RenderResult;

describe('test Tabs Component', () => {
    beforeEach(() => {
        wrapper = render(generateTabs(testProps))
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('should render the current default Tabs', () => {
        const { queryByText, container } = wrapper;
        expect(container.querySelector('.egg-tabs-nav')).toHaveClass('nav-line');
        const activeElement = queryByText('tab2');
        expect(activeElement).toBeInTheDocument();
        expect(activeElement).toHaveClass('is-active');
        expect(queryByText('tab1')).not.toHaveClass('is-active');
        expect(queryByText('content2')).toBeInTheDocument();
        expect(queryByText('content1')).not.toBeInTheDocument();
    });
    it('click tabItem should switch to content', () => {
        const { queryByText, getByText } = wrapper;
        const clickedElement = getByText('tab1');
        fireEvent.click(clickedElement);
        expect(clickedElement).toHaveClass('is-active');
        expect(queryByText('tab2')).not.toHaveClass('is-active');
        expect(queryByText('content1')).toBeInTheDocument();
        expect(queryByText('content2')).not.toBeInTheDocument();
        expect(testProps.onSelect).toHaveBeenCalledWith(0);
    });
    it('click disabled tabItem should not works', () => {
        const { getByText } = wrapper;
        const disabledElement = getByText('disabled');
        expect(disabledElement).toHaveClass('disabled');
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalled();
    });
});
