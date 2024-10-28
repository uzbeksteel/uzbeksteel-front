import { message } from '@/app';
import { useAppStore } from '@/store';
import { TUploadFileResponse } from '@/types/app';
import { FormItemProps, InputProps, UploadFile, UploadProps } from 'antd';
import { useState } from 'react';
import { useDeleteFileQuery, useUploadFileQuery } from '../services/queries';
import { VALID_MIME_TYPES, getImageFormData, getImgUrl, handleBeforeUpload, handlePreview } from '../utils';

export const useUpload = (_mutateAsync?: any, isDisable?: boolean) => {
    const [values, setValues] = useState<any>(null);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploadedFileId, setUploadedFileId] = useState<string | null>(null);
    const { setIsModal, setPreviewImage, setPreviewTitle } = useAppStore();
    const { mutateAsync: uploadMutateAsync } = useUploadFileQuery(onUploadSuccess);
    const { mutateAsync: deleteMutateAsync } = useDeleteFileQuery(onDeleteSuccess);

    function onUploadSuccess(data: TUploadFileResponse) {
        setUploadedFileId(data.id);
        setFileList([]);
    }

    function onDeleteSuccess(data: any) {
        return data;
    }

    const handleOnPreview = (file: UploadFile) => {
        handlePreview({ file, setPreviewOpen: setIsModal, setPreviewImage, setPreviewTitle });
    };

    const handleSetImages = (data: string[]) => {
        const images: UploadFile[] = [];

        if (data.length) {
            data.forEach((image, idx) => {
                images.push({
                    uid: `${idx}`,
                    name: image,
                    status: 'done',
                    url: getImgUrl(image),
                });
            });

            setFileList(images);
        }
    };

    const handleRemove: UploadProps['onRemove'] = (file) => {
        const isHasFile = fileList.some((f) => f.status === 'done');

        if (isHasFile) {
            deleteMutateAsync(file.uid);
        }
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleOnFinish = (values: any) => {
        if (fileList.length === 0) {
            return message.warning('Пожалуйста, загрузите изображения');
        } else {
            const formData = getImageFormData(fileList);

            uploadMutateAsync(formData);
            setValues(values);
        }
    };

    const fieldProps = (label: string): Partial<FormItemProps & InputProps> => ({
        label,
        required: true,
    });

    const uploadProps: UploadProps = {
        accept: VALID_MIME_TYPES,
        listType: 'picture-card',
        fileList,
        disabled: isDisable,
        multiple: true,
        maxCount: 10,
        onRemove: handleRemove,
        onChange: handleChange,
        onPreview: handleOnPreview,
        beforeUpload: handleBeforeUpload,
    };

    return {
        uploadedFileId,
        uploadProps,
        fieldProps,
        setFileList,
        handleOnFinish,
        handleSetImages,
        uploadMutateAsync,
    };
};
