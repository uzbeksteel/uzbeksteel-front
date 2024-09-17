import { Checkbox as AntdCheckbox, CheckboxProps as AntdCheckboxProps, Form, FormItemProps } from 'antd';
import { Box } from '@/components';

interface CheckboxProps extends FormItemProps {
    checkboxProps?: AntdCheckboxProps;
}

export const Checkbox = ({ checkboxProps, label, ...props }: CheckboxProps) => {
    return (
        <Box $align="center">
            <Form.Item style={{ margin: 0 }} label="" {...props}>
                <AntdCheckbox {...checkboxProps} />
            </Form.Item>
            <span style={{ marginLeft: '8px' }}>{label}</span>
        </Box>
    );
};
