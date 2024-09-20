import { Box, Field, Form, Loading, PageHeader } from '@/components';
import { getOneProfessionQuery, useCreateProfession, useUpdateProfession } from '@/lib/services';
import { IProfessionPayload } from '@/types/profession';
import { useForm } from 'antd/es/form/Form';
import { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const MutateProfession: FC = () => {
    const [form] = useForm();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { mutateAsync } = useCreateProfession();
    const { mutateAsync: updateMutateAsync } = useUpdateProfession(id);

    const { isLoading } = getOneProfessionQuery(id);

    if (isLoading) {
        return <Loading />;
    }

    const onFinish = (values: IProfessionPayload) => {
        if (type === '1') {
            mutateAsync(values);
        } else if (type === '2') {
            updateMutateAsync(values);
        }
    };

    // useEffect(() => {
    //     console.log({ data });

    //     if (id) {
    //         form.setFieldsValue({
    //             name: data?.name,
    //             description: data?.description,
    //         });
    //     }
    // }, []);

    return (
        <>
            <PageHeader title="Касблар" />
            <Box $m="20px">
                <Form form={form} style={{ width: '100%' }} onFinish={onFinish} loading={false}>
                    <Field span={24} placeholder="Касб номини киритининг" required name={'name'} label={'Касб номини'} />

                    <Field span={24} placeholder="Касб тавсифини киритинг" required name={'description'} label={'Касб тавсифи'} textarea />
                </Form>
            </Box>
        </>
    );
};
