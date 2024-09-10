import { List as AntList } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h3`
    margin-bottom: 15px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;

export const List = styled(AntList)`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    & li {
        padding: 6px 10px !important;
        border: 0 !important;
    }

    & p {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
`;

export const Link = styled(RouterLink)`
    display: block;
    margin: 10px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #f7b336;

    &:hover {
        color: #f7b336;
        text-decoration: underline;
    }
`;
