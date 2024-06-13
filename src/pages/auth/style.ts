import { Form, Layout } from 'antd';
import styled from 'styled-components';

export const Auth = styled(Layout)`
    align-items: center;
    display: flex;
    position: absolute;
    justify-content: center;
    flex-direction: column;
    gap: var(--3xl);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
`;

export const AuthForm = styled(Form)`
    width: 360px;
    margin: 0px auto;
`;
