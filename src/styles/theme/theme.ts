import { theme } from 'antd';
import { components, token } from './config';
import { Theme } from '@/constants';

export const antTheme = (mode: Theme) => ({
    token,
    components,
    algorithm: mode === Theme.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
});
