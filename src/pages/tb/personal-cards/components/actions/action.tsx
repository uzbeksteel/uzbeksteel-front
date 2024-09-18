import { Icon } from '@/components';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const Actions = ({ id }: { id: string }) => {
    return (
        <Fragment>
            <Flex gap={10} justify="center" align="center">
<<<<<<< HEAD
                <Link to={`detail/${id}`}>
=======
                <Link to={`${id}`}>
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
                    <Button type="dashed" icon={<Icon name="Eye" />} />
                </Link>
            </Flex>
        </Fragment>
    );
};
