import { Box, Card, Field, Form, Select } from '@/components';
import { generateSelectOptions } from '@/lib/helper';
import { selectableWShEmpoyesQuery, useSelectableWorkshopQuery, useWorkshopMutation } from '@/lib/services';
import { useState } from 'react';
import { dictionary } from '../dictionary';

export const CreateForm = () => {
    const [refKey, setRefKey] = useState<string | null>(null);

    const { mutate: createWorkshop } = useWorkshopMutation();
    const { data: workshops, isLoading: workshopLoading } = useSelectableWorkshopQuery();
    const { data: employes, isLoading: employesLoading } = selectableWShEmpoyesQuery(refKey || '');

    const getWorkshopEmployes = (ref_key: string) => {
        setRefKey(ref_key);
    };

    const onFinish = async ({ ref_key, tub_number }: { ref_key: string; tub_number: string }) => {
        createWorkshop({
            name: workshops.find((el) => el.Ref_Key === ref_key)?.Description as string,
            ref_key,
            workshop_director: tub_number,
        });
    };

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish}>
                    <Field span={24} label={dictionary.labels[0]} name="ref_key" required={true}>
                        <Select loading={workshopLoading} placeholder={dictionary.labels[0]} options={generateSelectOptions(workshops, 'Description', 'Ref_Key')} showSearch={true} onChange={(e: string) => getWorkshopEmployes(e)} />
                    </Field>

                    <Field span={24} label={dictionary.labels[1]} name="tub_number" required={true}>
                        <Select loading={employesLoading} placeholder={dictionary.labels[0]} options={generateSelectOptions(employes, 'ishchi', 'tabNomer')} showSearch={true} />
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
