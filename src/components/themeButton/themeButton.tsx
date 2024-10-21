import styled from 'styled-components';
import { Select, SelectProps } from 'antd';
import { browserTheme, selectOptions } from '@/components/themeButton/constants.tsx';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/utils';

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

    const initialTheme = searchParams.get('theme') || getLocalStorage('theme') || browserTheme;

    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const urlTheme = searchParams.get('theme');
        if (urlTheme) {
            setTheme(urlTheme);
            setLocalStorage('theme', urlTheme);
        } else if (getLocalStorage('theme')) {
            setTheme(getLocalStorage('theme'));
        } else {
            setTheme(browserTheme);
        }
    }, [searchParams, browserTheme]);

    const handleThemeChange = (value: string) => {
        setTheme(value);
        setSearchParams({ theme: value });
        setLocalStorage('theme', value);
    };
    return <StyledSelect options={selectOptions} value={theme} onChange={(value) => handleThemeChange(value)} />;
};
