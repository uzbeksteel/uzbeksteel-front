import { Box, Card, Field, Form, Select } from '@/components';
import { UserRoles, UserTypes } from '@/constants';
import { useDebounce } from '@/lib/hooks';
import { getUser1CByTabNumberQuery } from '@/lib/services';
import { useCreateUserMutation } from '@/lib/services/mutations/user';
import { useAppStore } from '@/store';
import { Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Password from 'antd/es/input/Password';
import { useEffect } from 'react';
import { dictionary } from '../dictionary';

export const CreateEmployeeForm = () => {
    const { onSearch } = useDebounce();
    const { search } = useAppStore();
    const [form] = useForm();

    const { data, isLoading } = getUser1CByTabNumberQuery(search);

    useEffect(() => {
        if (data) {
            form.setFieldValue('first_name', data.ishchi);
            form.setFieldValue('last_name', data.ishchi);
            form.setFieldValue('position', data.lavozim);
            form.setFieldValue('birth_date', data.tugilganSana);
            form.setFieldValue('place_of_birth', data.tugilganJoyi);
            form.setFieldValue('phone', data.telefon);
        }
    }, [data, search]);

    const { mutateAsync } = useCreateUserMutation();

    const onFinish = (v: any) => {
        if (data) {
            mutateAsync({ ...v, nationality: data.millati });
        }
    };

    const roleOption = Object.keys(UserRoles).map((el) => ({ value: el, label: el }));
    const userTypesOption = Object.keys(UserTypes).map((el) => ({ value: el, label: el }));

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish} form={form} isloading={isLoading}>
                    <Field span={24} label={dictionary.labels[0]} name="tab_number" required={true}>
                        <Input name="tab_number" placeholder={dictionary.labels[0]} onChange={onSearch} />
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

                    <Field span={24} label={dictionary.labels[6]} name="place_of_birth" required={true}>
                        <Input name="place_of_birth" placeholder={dictionary.labels[6]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[7]} name="phone" required={true}>
                        <Input name="phone" placeholder={dictionary.labels[7]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[8]} name="role" required={true}>
                        <Select loading={true} placeholder={dictionary.labels[8]} options={roleOption} />
                    </Field>

                    <Field span={24} label={dictionary.labels[9]} name="user_type" required={true}>
                        <Select loading={true} placeholder={dictionary.labels[9]} options={userTypesOption} />
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
