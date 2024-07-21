import { ModalProps } from 'antd';
import { FC, ReactNode } from 'react';
import * as S from './styled';

interface CustomModalProps {
    children: ReactNode;
}

export const CustomModal: FC<CustomModalProps & ModalProps> = ({ children, ...props }) => {
    return <S.styledModal {...props}>{children}</S.styledModal>;
};
