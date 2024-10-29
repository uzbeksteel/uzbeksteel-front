import styled from 'styled-components';
import { Select, SelectProps } from 'antd';
import { selectOptions } from '@/components/themeSelect/constants.tsx';
import { useThemeStore } from '@/store';
import { Theme } from '@/constants';

const StyledSelect = styled(Select)<SelectProps>`
    .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
    }

    .ant-select-arrow {
        color: #d5680a;
    }
`;

export const ThemeSelect = () => {
    const { theme, setTheme } = useThemeStore();

    const handleThemeChange = (value: Theme) => {
        setTheme(value);
    };

    return <StyledSelect options={selectOptions} value={theme} onChange={(value) => handleThemeChange(value)} />;
};
