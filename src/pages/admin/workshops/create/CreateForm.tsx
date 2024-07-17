import { Box, Card, Field, Form, Select } from '@/components';
import { Radio } from 'antd';
import { getFields } from './fields';

export const CreateForm = () => {
    return (
        <Box $m="10px 24px">
            <Card>
                <Form>
                    {getFields().map(({ label, name, isRequired, options }, index) => (
                        <Field key={index} span={24} label={label} name={name} required={isRequired}>
                            <Select placeholder={label} options={options} showSearch={true} />
                        </Field>
                    ))}

                    <Field span={24} label="Тип мастера" name="name" required={true}>
                        <Radio.Group onChange={() => {}} value={1}>
                            <Radio value={1}>Мастер</Radio>
                            <Radio value={2}>Старший мастер</Radio>
                        </Radio.Group>
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
