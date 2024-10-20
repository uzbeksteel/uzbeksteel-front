import { IMAGE_URL } from '@/constants';
import { useUploadFileQuery } from '@/lib/services';
import { getImageFormData } from '@/lib/utils';
import { useAppStore } from '@/store';
import { TUploadFileResponse } from '@/types/app';
import { Card, Image, Modal, Upload, UploadFile, message } from 'antd';
import { UploadProps } from 'antd/lib';
import { useState } from 'react';
import { Box } from '../box';
import { Icon } from '../icon';

export interface IProps {
    extraImage?: boolean;
}

const { Dragger } = Upload;

export const UploadDragger = ({ extraImage }: IProps) => {
    const { setImageId, fileList, setFileList, extraFileList, setExtraFileList, setExtraImageId } = useAppStore();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState<string>('');
    const handleCancel = () => setPreviewVisible(false);

    const { mutate: uploadMutate } = useUploadFileQuery(onUploadSuccess);

    function onUploadSuccess(data: TUploadFileResponse) {
        message.success(`file muvafaqqiyatli yuklandi.`);
        if (extraImage) {
            setExtraImageId(data?.id);
        } else {
            setImageId(data?.id);
        }
    }

    const onPreview = async (file: UploadFile) => {
        setPreviewImage(file.thumbUrl || file.url!);
        setPreviewVisible(true);
    };

    const props: UploadProps = {
        listType: 'picture',
        name: 'file',
        multiple: true,
        action: IMAGE_URL,
        fileList: extraImage ? extraFileList : fileList,
        onPreview,
        onChange(info) {
            const { fileList } = info;
            const formData = getImageFormData(fileList);
            uploadMutate(formData);
            if (extraImage) {
                setExtraFileList(info.fileList);
            } else {
                setFileList(info.fileList);
            }
        },
    };

    return (
        <Card>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <Box $align="center" $justify="center">
                        <Icon name="Inbox" size="small" style={{ height: '24px' }} />
                    </Box>
                </p>
                <p className="ant-upload-text">Rasm va fayl yuklash uchun bu yerga bosing!</p>
                <p className="ant-upload-hint">Kerkali faylni tanlang va yuklang!</p>
            </Dragger>
            <Modal footer={null} onCancel={handleCancel} open={previewVisible}>
                <Image src={previewImage} />
            </Modal>
        </Card>
    );
};
