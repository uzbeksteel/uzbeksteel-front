import { ButtonProps } from 'antd';
import { FC } from 'react';
import { StyledButton } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};
