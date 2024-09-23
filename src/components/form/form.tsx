import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import { TAntFormProps, TFieldProps } from '@/types/components';
import { useIsMutating } from '@tanstack/react-query';
import { Col, Form as AntForm, Input, InputNumber, Row, Spin } from 'antd';
import { Button } from '..';
import { Box } from '../box';

export const Form = ({ save, loading, children, isloading, onCancel, ...props }: TAntFormProps) => {
    const isMutating = useIsMutating();

    return loading ? (
        <Box $align="center" $justify="center" $height="var(--full)">
            <Spin size="large" />
        </Box>
    ) : (
        <AntForm layout="vertical" disabled={isloading} {...props}>
            <Row gutter={[10, 10]}>{children}</Row>

            {!save && (
                <Box $gap="10px" $justify="end" $mt="10px">
                    <Button htmlType="button" onClick={onCancel} type="primary" loading={!!isMutating} disabled={!!isMutating} style={{ background: 'white', color: '#d5680a', border: '1px solid ' }}>
                        {dictionary.cancel}
                    </Button>
                    <Button htmlType="submit" type="primary" loading={!!isMutating} disabled={!!isMutating}>
                        {dictionary.save}
                    </Button>
                </Box>
            )}
        </AntForm>
    );
};

export const Field = ({ span, textarea, rule, isRequired, isInputNumber, children, ...props }: TFieldProps) => {
    const formatNumber = (value: TParams): string => (value ? value.replace(/\D/g, '') : '');

    return (
        <Col span={span || 12} style={{ margin: '0px auto' }}>
            <AntForm.Item
                rules={[
                    {
                        required: isRequired ?? true,
                        message: `${dictionary.messages[0]}, ${props.label}`,
                    },
                    ...(rule ? rule : []),
                ]}
                {...props}
            >
                {children ? children : textarea ? <Input.TextArea style={{ borderRadius: '0px' }} placeholder={props.placeholder} rows={4} /> : isInputNumber ? <InputNumber placeholder={props.placeholder} style={{ borderRadius: '0px' }} formatter={formatNumber} parser={formatNumber} /> : <Input style={{ borderRadius: '0px' }} {...props} />}
            </AntForm.Item>
        </Col>
    );
};
