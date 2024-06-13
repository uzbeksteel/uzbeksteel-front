import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import { TAntFormProps, TFieldProps } from '@/types/components';
import { useIsMutating } from '@tanstack/react-query';
import { Form as AntForm, Button, Col, Input, InputNumber, Row, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { Box } from '../box';

export const Form = ({ save, loading, children, ...props }: TAntFormProps) => {
    const isMutating = useIsMutating();
    const { id } = useParams();

    return loading ? (
        <Box $align="center" $justify="center" $height="var(--full)">
            <Spin size="large" />
        </Box>
    ) : (
        <AntForm layout="vertical" {...props}>
            <Row gutter={[10, 10]}>{children}</Row>

            {!save && (
                <Button htmlType="submit" type="primary" loading={!!isMutating} disabled={!!isMutating}>
                    {id ? dictionary.save : dictionary.add}
                </Button>
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
                {children ? children : textarea ? <Input.TextArea style={{ borderRadius: '0px' }} rows={4} /> : isInputNumber ? <InputNumber style={{ borderRadius: '0px' }} formatter={formatNumber} parser={formatNumber} /> : <Input style={{ borderRadius: '0px' }} {...props} />}
            </AntForm.Item>
        </Col>
    );
};
