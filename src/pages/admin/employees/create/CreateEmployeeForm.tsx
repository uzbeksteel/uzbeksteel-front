import { Box, Card, Field, Form, Select } from '@/components';
import { Input } from 'antd';
import Password from 'antd/es/input/Password';
import { dictionary } from '../dictionary';

export const CreateEmployeeForm = () => {
    const onFinish = () => {};

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish}>
                    <Field span={24} label={dictionary.labels[0]} name="tab_number" required={true}>
                        <Input name="tab_number" placeholder={dictionary.labels[0]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[1]} name="first_name" required={true}>
                        <Input name="first_name" placeholder={dictionary.labels[1]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[2]} name="last_name" required={true}>
                        <Input name="last_name" placeholder={dictionary.labels[2]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[3]} name="password" required={true}>
                        <Password name="password" placeholder={dictionary.labels[3]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[4]} name="position" required={true}>
                        <Select loading={true} placeholder={dictionary.labels[4]} options={[]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[5]} name="birth_date" required={true}>
                        <Input name="birth_date" placeholder={dictionary.labels[5]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[6]} name="birth_place" required={true}>
                        <Input name="birth_place" placeholder={dictionary.labels[6]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[7]} name="phone" required={true}>
                        <Input name="phone" placeholder={dictionary.labels[7]} />
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
