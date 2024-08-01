import { Box, Card, Field, Form, Icon, Select } from '@/components';
import { getAllWorkshopsQuery, useActMutation } from '@/lib/services';
import { Input, Upload, message } from 'antd';
import { UploadProps } from 'antd/lib';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { workShopDictionary } from '../../dictionary';

interface IValues {
    name: string;
    sex: string;
    file: any;
}

export const CreateActForm = () => {
    const [imageId, setImageId] = useState<string>();
    const { id } = useParams();

    const { data, isLoading } = getAllWorkshopsQuery(id);
    const { mutate } = useActMutation();

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'http://localhost:3000/api/v1/files/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                setImageId(info.file.response?.id);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const onFinish = async (values: IValues) => {
        if (imageId) {
            mutate({
                name: values.name,
                workShopId: values.sex,
                file: imageId,
            });
        }
    };

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish} loading={isLoading}>
                    <Field span={24} label={workShopDictionary.labels[0]} name="name" required={true}>
                        <Input placeholder={workShopDictionary.labels[0]} />
                    </Field>

                    <Field span={24} label={workShopDictionary.labels[1]} name="sex" required={true}>
                        <Select loading={isLoading} placeholder={workShopDictionary.labels[0]} showSearch={true} options={data.map((v) => ({ label: v.name, value: v.id }))} />
                    </Field>

                    <Field span={24} label={workShopDictionary.labels[2]} name="file" required={true}>
                        <Upload.Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <Box $align="center" $justify="center">
                                    <Icon name="Inbox" size="small" style={{ height: '24px' }} />
                                </Box>
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p>
                        </Upload.Dragger>
                    </Field>
                </Form>
            </Card>
        </Box>
    );
};
