import styled from 'styled-components';
import { Select, SelectProps } from 'antd';
import { selectOptions } from '@/components/themeSelect/constants.tsx';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
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
    const [searchParams, setSearchParams] = useSearchParams();

    const { theme, setTheme } = useThemeStore();

    useEffect(() => {
        const urlTheme = searchParams.get('theme') as Theme;
        if (urlTheme) {
            setTheme(urlTheme);
        }
    }, [searchParams, setTheme]);

    const handleThemeChange = (value: Theme) => {
        setTheme(value);
        setSearchParams({ theme: value });
    };

    return <StyledSelect options={selectOptions} value={theme} onChange={(value) => handleThemeChange(value)} />;
};
