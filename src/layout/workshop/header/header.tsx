import { FullscreenButton, Icon, LanguageSelect, User } from '@/components';
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

                <Flex gap="large" align="center">
                    <FullscreenButton />

                    <Icon name="Settings" color="#D5680A" />

                    <LanguageSelect />
                    <User />
                </Flex>
            </LayoutHeader>
        </>
    );
};
