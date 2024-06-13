import { ButtonProps } from 'antd';
import { FC } from 'react';
import { StyledButton } from './styles';

export const Button: FC<ButtonProps> = ({ ...props }) => {
    return <StyledButton {...props}>Button</StyledButton>;
};
