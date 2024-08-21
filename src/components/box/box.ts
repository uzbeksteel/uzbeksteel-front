import { TBoxProps } from '@/types/components';
import styled from 'styled-components';

export const Box = styled.div<TBoxProps>`
    align-items: ${({ $align }) => $align};
    background-color: ${({ $bg }) => $bg};
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $justify }) => $justify};
    gap: ${({ $gap }) => $gap};
    height: ${({ $height }) => $height};
    margin: ${({ $m }) => $m};
    margin-bottom: ${({ $mb }) => $mb};
    margin-top: ${({ $mt }) => $mt};
    padding: ${({ $p }) => $p};
    width: ${({ $width }) => $width};
`;
