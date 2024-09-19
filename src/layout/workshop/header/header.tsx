import { Icon, User } from '@/components';
import { Flex } from 'antd';
import { LayoutHeader } from '../../style';
import { Props } from '../../type';

export const Header = ({ bg }: Props) => {
    return (
        <>
            <LayoutHeader $bg={bg}>
                <Flex justify="center" align="center" gap={12}>
                    <img src="/logo.svg" height={40} width={140} />
                </Flex>

                <Flex gap="large">
                    <Icon name="Expand" color="#D5680A" />

                    <Icon name="Settings" color="#D5680A" />

                    <Icon name="Globe" color="#D5680A" />
                    <User />
                </Flex>
            </LayoutHeader>
        </>
    );
};
