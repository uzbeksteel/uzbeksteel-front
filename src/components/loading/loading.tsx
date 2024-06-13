import { Flex, Spin } from 'antd';

export const Loading = () => {
    return (
        <Flex align="center" justify="center" style={{ height: '100%' }}>
            <Spin size="large" />
        </Flex>
    );
};
