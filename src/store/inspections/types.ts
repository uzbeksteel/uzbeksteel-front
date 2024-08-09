import { CONTROL_TYPE } from '@/constants';

export interface IMagazineStore {
    stage: CONTROL_TYPE;
    setSate: (state: CONTROL_TYPE) => void;
}
