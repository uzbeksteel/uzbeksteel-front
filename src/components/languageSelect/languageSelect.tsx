import styled from 'styled-components';
import { Select, SelectProps } from 'antd';
import { selectOptions } from './constants';
import { useTranslation } from 'react-i18next';

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

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    return <StyledSelect options={selectOptions} value={i18n.language} onChange={(value) => handleChange(value)} />;
};
