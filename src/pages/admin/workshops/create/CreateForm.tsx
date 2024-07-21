import { Box, Card, Field, Form, Select } from '@/components';
import { UserRoles } from '@/constants';
import { generateSelectOptions } from '@/lib/helper';
import { getUser1CByTabNumberQuery, selectableWShEmpoyesQuery, useSelectableWorkshopQuery, useWorkshopMutation } from '@/lib/services';
import { useCreateUserMutation } from '@/lib/services/mutations/user';
import { useState } from 'react';
import { dictionary } from '../dictionary';

export const CreateForm = () => {
    const [refKey, setRefKey] = useState<string | null>(null);
    const [tabNumber, setTabNumber] = useState<string | null>(null);
    const { mutate: createWorkshop } = useWorkshopMutation();
    const { mutateAsync: createUser } = useCreateUserMutation();
    const { data: workshops, isLoading: workshopLoading } = useSelectableWorkshopQuery();
    const { data: employes, isLoading: employesLoading } = selectableWShEmpoyesQuery(refKey || '');

    const getWorkshopEmployes = (ref_key: string) => {
        setRefKey(ref_key);
    };

    const getWorkshopDirector = (tub_number: string) => {
        setTabNumber(tub_number);
    };

    const { data: director } = getUser1CByTabNumberQuery(tabNumber || '');

    const onFinish = async ({ ref_key }: { ref_key: string }) => {
        const user = await createUser({ first_name: director?.ishchi as string, last_name: director?.ishchi as string, password: director?.telefon as string, nationality: director?.millati as string, tab_number: director?.tabNomer as string, position: director?.lavozim as string, birth_date: director?.tugilganSana as string, place_of_birth: director?.tugilganJoyi as string, phone: director?.telefon as string, role: UserRoles.DIRECTOR });

        createWorkshop({
            name: workshops.find((el) => el.Ref_Key === ref_key)?.Description as string,
            ref_key,
            workshop_director: user.id,
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
                        <Select onChange={(e: string) => getWorkshopDirector(e)} loading={employesLoading} placeholder={dictionary.labels[0]} options={generateSelectOptions(employes, 'ishchi', 'tabNomer')} showSearch={true} />
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
