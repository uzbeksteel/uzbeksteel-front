import { Icon } from '@/components';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

export const Actions = ({ id }: { id: string }) => {
    return (
        <>
            <Flex gap={10} justify="center" align="center">
                <Link to={`${id}/personal-card/?type=2`}>
                    <Button type="primary" icon={<Icon name="Eye" />} />
                </Link>
            </Flex>
        </>
    );
};
