import { dictionary, Theme as ThemeEnum } from '@/constants';
import { antTheme, GlobalStyles } from '@/styles';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { ConfigProvider, Empty, message as antMessage, Modal } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { HookAPI } from 'antd/es/modal/useModal';
import { PropsWithChildren, useEffect } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { useThemeStore } from '@/store';

let modal: HookAPI;
let message: MessageInstance;
let queryClient: QueryClient;
export const browserTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeEnum.DARK : ThemeEnum.LIGHT;

antMessage.config({
    top: 10,
    duration: 3,
    maxCount: 3,
});

export const Theme = ({ children }: PropsWithChildren) => {
    const { theme, initializeTheme } = useThemeStore();
    const [modalApi, modalContextHolder] = Modal.useModal();
    const [messageApi, messageContextHolder] = antMessage.useMessage();

    modal = modalApi;
    message = messageApi;
    queryClient = useQueryClient();

    const getRootElement = () => document.getElementById('root');

    const getPopupContainer = (triggerNode?: HTMLElement) => (triggerNode?.closest('.ant-modal-content') as HTMLElement) || getRootElement();

    useEffect(() => {
        initializeTheme(browserTheme);
    }, [initializeTheme]);

    return (
        <StyledProvider theme={{}}>
            <GlobalStyles />

            <ConfigProvider csp={{ nonce: 'uzbek-steel' }} componentSize="large" renderEmpty={() => <Empty description={dictionary.noData} image={Empty.PRESENTED_IMAGE_SIMPLE} />} getPopupContainer={getPopupContainer} theme={antTheme(theme!)}>
                {modalContextHolder}
                {messageContextHolder}

                {children}
            </ConfigProvider>
        </StyledProvider>
    );
};

export { message, modal, queryClient };
