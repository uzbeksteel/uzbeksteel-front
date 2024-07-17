import { FormInstance } from 'antd';

export interface IGraphicStore {
    createFormInstance: FormInstance | null;
    setCreateFormInstance: (formInstance: FormInstance) => void;
}
