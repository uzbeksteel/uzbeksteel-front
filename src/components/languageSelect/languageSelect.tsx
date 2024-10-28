import styled from 'styled-components';
import { Select, SelectProps } from 'antd';
import { selectOptions } from './constants';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const StyledSelect = styled(Select)<SelectProps>`
    .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
    }

    .ant-select-arrow {
        color: #d5680a;
    }
`;

export const LanguageSelect = () => {
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);

        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set('lng', value);

        setSearchParams(updatedParams, { replace: true });
    };

    return <StyledSelect options={selectOptions} value={i18n.language} onChange={(value) => handleChange(value)} />;
};
