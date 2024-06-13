import { Typography as AntTypography } from 'antd';
import styled, { css } from 'styled-components';
import { TypographyProps } from './types';

const { Title, Text, Paragraph } = AntTypography;

const commonStyles = css<TypographyProps>`
    color: ${(props) => props.color};
    margin-bottom: ${(props) => props.marginBottom || '16px'};
    font-weight: ${(props) => props.fontWeight || 'normal'};
`;

export const StyledTitle = styled(Title)<TypographyProps>`
    ${commonStyles}
`;

export const StyledText = styled(Text)<TypographyProps>`
    ${commonStyles}
`;

export const StyledParagraph = styled(Paragraph)<TypographyProps>`
    ${commonStyles}
`;
