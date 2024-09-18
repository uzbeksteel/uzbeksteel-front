import { Upload, UploadProps } from 'antd';
import { Inbox } from 'lucide-react';

const { Dragger: AntdDragger } = Upload;
export const Dragger = (props: UploadProps) => {
    return (
        <AntdDragger {...props}>
            <p className="ant-upload-drag-icon">
                <Inbox size={40} />
            </p>
            <p className="ant-upload-text">Нажмите или перетащите файл в эту область, чтобы загрузить</p>
            <p className="ant-upload-hint">Поддержка одиночной или массовой загрузки. Поддерживает только .docx, .doc, .xls.</p>
        </AntdDragger>
    );
};
