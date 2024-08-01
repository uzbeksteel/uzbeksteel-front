import { message } from '@/app';
import { Box, Card, Field, Form, Icon, Select } from '@/components';
import { Input, Upload } from 'antd';
import { UploadProps } from 'antd/lib';
import { useParams } from 'react-router-dom';
import { dictionary } from '../../dictionary';

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
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

interface IValues {}

export const CreateActForm = () => {
    const { id } = useParams();
    // const { uploadProps, fieldProps, handleOnFinish, handleSetImages } = useUpload(() => {}, !!id);

    const onFinish = async (values: IValues) => {};

    return (
        <Box $m="10px 24px">
            <Card>
                <Form onFinish={onFinish}>
                    <Field span={24} label={dictionary.labels[0]} name="name" required={true}>
                        <Input placeholder={dictionary.labels[0]} />
                    </Field>

                    <Field span={24} label={dictionary.labels[1]} name="sex" required={true}>
                        <Select loading={true} placeholder={dictionary.labels[0]} showSearch={true} />
                    </Field>

                    <Field span={24} label={dictionary.labels[2]} name="file" required={true}>
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
