import { Input, Table } from 'antd';
import styled from 'styled-components';

export const AntInput = styled(Input)`
    width: 300px;
    border-radius: 0px;
`;

export const AndtTable = styled(Table)`
    max-width: 100%;
    width: 100%;
    border-radius: 0px !important;
    margin: 10px 24px !important;

    .ant-table-title {
        border-radius: 0px !important;
    }

    .ant-pagination-item {
        border-radius: 0px !important;
    }
`;
