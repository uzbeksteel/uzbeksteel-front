import { Box } from '@/components';
import { Form, FormItemProps, Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from 'antd';

interface SwitchProps extends FormItemProps {
    switchProps?: AntdSwitchProps;
}

export const Switch = ({ switchProps, label, ...props }: SwitchProps) => {
    return (
        <Box $align="center">
            <Form.Item style={{ margin: 0 }} label="" {...props}>
                <AntdSwitch {...switchProps} />
            </Form.Item>
            <span style={{ marginLeft: '8px' }}>{label}</span>
        </Box>
    );
};
