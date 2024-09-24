import { Icon } from '@/components';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const Actions = ({ id }: { id: string }) => {
    return (
        <Fragment>
            <Flex gap={10} justify="center" align="center">
                <Link to={`edit/${id}?type=edit`}>
                    <Button type="dashed" icon={<Icon name="Eye" />} />
                </Link>
            </Flex>
        </Fragment>
    );
};
