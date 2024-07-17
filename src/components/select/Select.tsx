import { SelectProps } from 'antd';
import { FC } from 'react';
import * as S from './style';

export const Select: FC<SelectProps> = ({ placeholder, ...props }) => {
    return <S.StyledSelect placeholder={placeholder || ''} {...props} />;
};
