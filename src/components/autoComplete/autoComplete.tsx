import { Select } from '@/components';
import { SelectProps } from 'antd';
import React from 'react';

export const AutoComplete = React.memo(({ options = [], ...restProps }: SelectProps) => {
    return (
        <Select
            showSearch
            options={options}
            optionFilterProp="children"
            filterOption={(input, option) => {
                return option?.label?.toString().toLowerCase().includes(input.toLowerCase()) || false;
            }}
            {...restProps}
        />
    );
});
