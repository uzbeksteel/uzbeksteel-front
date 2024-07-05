import { ButtonProps, FormItemProps, InputProps } from 'antd';
import { FormProps, Rule } from 'antd/es/form';
import { ReactNode } from 'react';

export type TAntFormProps = {
    save?: boolean;
    loading?: boolean;
    children: ReactNode;
} & Partial<FormProps>;

export type TFieldProps = {
    span?: number;
    rule?: Rule[];
    textarea?: boolean;
    isRequired?: boolean;
    children?: ReactNode;
    isInputNumber?: boolean;
} & Partial<FormItemProps & InputProps>;

export type TBoxProps = {
    $align?: string;
    $direction?: string;
    $justify?: string;
    $gap?: string;
    $height?: string;
    $m?: string;
    $mb?: string;
    $mt?: string;
    $p?: string;
    $width?: string;
};

export type TIconProps = {
    btn?: boolean;
    name: string;
} & Partial<ButtonProps>;

export type TSkeletonStyleProps = {
    $height?: number;
    $width?: number;
    $ml?: boolean;
};

export type TAddProps = {
    path?: string;
    onClick?: () => void;
};

export type TIsAdd = {
    isAdd?: boolean;
    titleTable?: string;
    onClick?: () => void;
};

export type IProfileDisplayProps = {
    avatar: string;
    fullName: string;
};
