import { Box, Field, Form, Icon, Typography, UploadDragger } from '@/components';
import { IMAGE_PREVIEW_URL } from '@/constants';
import { createMagazineMutation, updateMagazineMutation, useFindOneMagazine } from '@/lib/services';
import { useAppStore, useMagazineStore } from '@/store';
import { Card, DatePicker, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { CreateMagazineBody } from './type';

export const InspectionCreate = () => {
    const [form] = useForm<CreateMagazineBody>();
    const { imageId, setFileList, setExtraFileList, extraImageId } = useAppStore();
    const { stage } = useMagazineStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const { mutate } = createMagazineMutation();
    const { mutate: updateMutate } = updateMagazineMutation(id as string);
    const { data } = useFindOneMagazine(id as string);

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                omissions: data?.omissions,
                responsibles: data?.responsibles,
                measures: data?.measures,
                commissions: data?.commissions,
                control_date: dayjs(data?.control_date),
                complate_date: dayjs(data?.complate_date),
            });

            const { disadvantages_images, complated_images } = data;

            setFileList([
                {
                    uid: disadvantages_images.id as string,
                    name: disadvantages_images.name as string,
                    status: 'done',
                    url: `${IMAGE_PREVIEW_URL}/${disadvantages_images.url}`,
                },
            ]);

            if (complated_images) {
                setExtraFileList([
                    {
                        uid: complated_images.id as string,
                        name: complated_images.name as string,
                        status: 'done',
                        url: `${IMAGE_PREVIEW_URL}/${complated_images.url}`,
                    },
                ]);
            }
        }
    }, [id, data]);

    const onFinissh = ({ omissions, control_date, complate_date, responsibles, measures, commissions }: CreateMagazineBody) => {
        const opt = { omissions, control_date, complate_date, responsibles, measures, commissions, magazine_type: stage, signature: false, disadvantages_images: imageId ? imageId : data?.disadvantages_images.id } as CreateMagazineBody;
        if (id) {
            updateMutate({ ...opt, complated_images: extraImageId });
        } else {
            mutate(opt);
        }
        setFileList([]);
        setExtraFileList([]);
    };

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    {id ? 'Tekshiruvni yangilash' : 'Tekshiruv yaratish'}
                </Typography>
            </Box>
            <Box $p="20px" $gap="10px">
                <Card>
                    <Form form={form} onFinish={onFinissh} layout="vertical">
                        <Row gutter={[10, 10]}>
                            <Field span={24} name="file" label="Kamchilik rasmini yuklang:">
                                <UploadDragger extraImage={false} />
                            </Field>

                            <Field span={24} name="control_date" label="Назоратни ўтказиш санаси:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <DatePicker style={{ width: '100%' }} />
                            </Field>
                            <Field span={24} name="responsibles" label="Вакиллар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="omissions" label="Камчилик ва бузилишлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="measures" label="Чора-тадбирлар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="commissions" label="Ижроси учун жавобгар шахслар:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <Input.TextArea />
                            </Field>

                            <Field span={24} name="complate_date" label="Бажариш муддати:" rules={[{ required: true, message: 'Майдонни тўлдиринг!' }]}>
                                <DatePicker style={{ width: '100%' }} />
                            </Field>

                            {id && (
                                <Field span={24} name="file2" label="Ishning yakunlangandagi rasmi:">
                                    <UploadDragger extraImage={true} />
                                </Field>
                            )}
                        </Row>
                    </Form>
                </Card>
            </Box>
        </Fragment>
    );
};
