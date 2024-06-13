import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { StyleProps } from './type';

export const AndtLayout = styled(Layout)`
    margin-top: var(--base);
`;

export const LayoutSider = styled(Layout.Sider)<StyleProps>`
    height: 92vh;
    padding: 10px 0;
    background: ${({ $bg }) => $bg} !important;
    position: relative;
    box-shadow: 0px 2px 8px 0px #00000026;
`;

export const LayoutHeader = styled(Layout.Header)<StyleProps>`
    align-items: center;
    background: ${({ $bg }) => $bg};
    display: flex;
    justify-content: space-between;
    padding: 0 18px;
    box-shadow: 2px -1px 0px 0px #f0f0f0 inset;
`;

export const LayoutContent = styled(Layout.Content)<StyleProps>`
    /* background: ${({ $bg }) => $bg}; */
    background-color: inherit !important;
    height: 90vh;
    /* margin: var(--xl); */
    overflow-y: auto;
    /* padding: var(--base); */
`;

export const AntMenu = styled(Menu)`
    border: none !important;
    margin-top: 10px;
`;
