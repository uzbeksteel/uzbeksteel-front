import { Card } from 'antd';
import styled from 'styled-components';
import { CustomCardProps } from './card';

export const StyledCard = styled(Card)<CustomCardProps>`
    border: none;
    border-radius: 0px;
    opacity: 0px;
    margin: ${({ cardType }) => (cardType === 'block' ? '0px 20px' : '0px')} !important;
`;
