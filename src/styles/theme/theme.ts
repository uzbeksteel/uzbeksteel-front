import { ETheme } from '@/types/app';
import { theme } from 'antd';
import { components, token } from './config';

export const antTheme = (mode: ETheme) => ({
    token,
    components,
    algorithm: mode === ETheme.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
});
