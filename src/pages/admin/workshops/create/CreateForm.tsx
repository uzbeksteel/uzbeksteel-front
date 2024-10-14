import { Box, Card, Field, Form, Select } from '@/components';
import { generateSelectOptions } from '@/lib/helper';
import { useSelectableWorkshopQuery, useWorkshopMutation } from '@/lib/services';
import { dictionary } from '../dictionary';

export const CreateForm = () => {
    const { mutate: createWorkshop } = useWorkshopMutation();
    const { data: workshops, isLoading: workshopLoading } = useSelectableWorkshopQuery();

    const onFinish = async ({ ref_key }: { ref_key: string }) => {
        createWorkshop({
            name: workshops.find((el) => el.Ref_Key === ref_key)?.Description as string,
            ref_key,
        });
    };

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish}>
                    <Field span={24} label={dictionary.labels[0]} name="ref_key" required={true}>
                        <Select loading={workshopLoading} placeholder={dictionary.labels[0]} options={generateSelectOptions(workshops, 'Description', 'Ref_Key')} showSearch={true} />
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
