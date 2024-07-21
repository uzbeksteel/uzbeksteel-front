import { FormInstance } from 'antd';
import { IGraphic } from '@/types/graphics';

export interface IGraphicStore {
    createFormInstance: FormInstance | null;
    updateGraphicCredentials: IGraphic | null;
    updateFormInstance: FormInstance | null;
    setCreateFormInstance: (formInstance: FormInstance) => void;
    setUpdateGraphicCredentials: (formInstance: IGraphic) => void;
    setUpdateFormInstance: (formInstance: FormInstance) => void;
}
