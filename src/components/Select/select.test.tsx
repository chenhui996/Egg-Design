import React from 'react';
import { config } from 'react-transition-group';
import { render, fireEvent } from '@testing-library/react';

import Select, { SelectProps } from './select';
import Option from './option';

config.disabled = true; // ? find answer video

jest.mock('../Icon/icon', () => {
    return (props: any) => {
        return <span onClick={props.onClick}>{props.icon}</span>
    }
})

const testProps: SelectProps = {
    defaultValue: '',
    placeholder: 'test',
    onChange: jest.fn(),
    onVisibleChange: jest.fn(),
}

const multipleProps: SelectProps = {
    ...testProps,
    multiple: true
}

describe('test Select component', () => {
    it('should render the corrent Select component', () => {
        const wrapper = render(
            <Select
                { ...testProps }
            >
                <Option value="id1" label="test1" />
                <Option value="id2" label="test2" />
                <Option value="id3" disabled label="disabled" />
            </Select>
        )
        const inputEle = wrapper.getByPlaceholderText('test') as HTMLInputElement;
        expect(inputEle).toBeInTheDocument();

        // click the input
        fireEvent.click(inputEle);
        const firstItem = wrapper.getByText('test1');
        const disabledItem = wrapper.getByText('disabled');
        expect(firstItem).toBeInTheDocument();
        expect(testProps.onVisibleChange).toHaveBeenCalledWith(true);

        // click disabled item should not working
        fireEvent.click(disabledItem);
        expect(disabledItem).toBeInTheDocument();

        // click the dropdown
        fireEvent.click(firstItem);
        expect(firstItem).not.toBeInTheDocument();

        // check the events
        expect(testProps.onVisibleChange).toHaveBeenCalledWith(false);
        expect(testProps.onChange).toHaveBeenCalledWith('id1', ['id1']);
        expect(inputEle.value).toEqual('id1');

        // test focus
        expect(document.activeElement).toEqual(inputEle);
    })
    it('Select in multiple mode should works fine', () => {
        const wrapper = render(
            <Select {...multipleProps}>
                <Option value="id1" label="first" />
                <Option value="id2" label="second" />
                <Option value="id3" label="third" />
            </Select>
        )

        const inputEle = wrapper.getByPlaceholderText('test') as HTMLInputElement;
        fireEvent.click(inputEle);
        const firstItem = wrapper.getByText('first');
        const secondItem = wrapper.getByText('second');

        fireEvent.click(firstItem);
        expect(firstItem).toBeInTheDocument();

        // add selected classname
        expect(firstItem).toHaveClass('is-selected');

        // add check icon
        expect(wrapper.getByText('check')).toBeInTheDocument();
        
        // fire events
        expect(multipleProps.onChange).toHaveBeenCalledWith('id1', ['id1']);

        // add tags
        expect(wrapper.container.querySelectorAll('.egg-tag').length).toEqual(1); // span

        // remove placeholer
        expect(inputEle.placeholder).toEqual('');

        // click 2nd item
        fireEvent.click(secondItem);
        expect(multipleProps.onChange).toHaveBeenCalledWith('id2', ['id1', 'id2']);
        expect(wrapper.container.querySelectorAll('.egg-tag').length).toEqual(2);

        // relick 2nd item
        fireEvent.click(secondItem);

        // remove active class
        expect(secondItem).not.toHaveClass('is-selected');

        // remove tags
        expect(wrapper.container.querySelectorAll('.egg-tag').length).toEqual(1);
        expect(multipleProps.onChange).toHaveBeenLastCalledWith('id2',['id1']);

        // click tag close
        fireEvent.click(wrapper.getByText('times'));
        expect(multipleProps.onChange).toHaveBeenLastCalledWith('id1', []);

        // remove all tags
        expect(wrapper.container.querySelectorAll('.egg-tag').length).toEqual(0);

        // refill placeholder text
        expect(inputEle.placeholder).toEqual('test');
    });
    

});
