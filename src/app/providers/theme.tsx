import { dictionary } from '@/constants';
import { useThemeDetector } from '@/lib/hooks';
import { GlobalStyles, antTheme } from '@/styles';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { ConfigProvider, Empty, Modal, message as antMessage } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { HookAPI } from 'antd/es/modal/useModal';
import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

let modal: HookAPI;
let message: MessageInstance;
let queryClient: QueryClient;

antMessage.config({
    top: 10,
    duration: 3,
    maxCount: 3,
});

export const Theme = ({ children }: PropsWithChildren) => {
    const theme = useThemeDetector();
    const [modalApi, modalContextHolder] = Modal.useModal();
    const [messageApi, messageContextHolder] = antMessage.useMessage();

    modal = modalApi;
    message = messageApi;
    queryClient = useQueryClient();

    const getRootElement = () => {
        return document.getElementById('root');
    };

    const getPopupContainer = (triggerNode?: HTMLElement) => {
        return (triggerNode?.closest('.ant-modal-content') as HTMLElement) || (getRootElement() as HTMLElement);
    };

    return (
        <StyledProvider theme={{}}>
            <GlobalStyles />

            <ConfigProvider csp={{ nonce: 'uzbek-steel' }} componentSize="large" renderEmpty={() => <Empty description={dictionary.noData} image={Empty.PRESENTED_IMAGE_SIMPLE} />} getPopupContainer={getPopupContainer} theme={antTheme(theme)}>
                {modalContextHolder}
                {messageContextHolder}

                {children}
            </ConfigProvider>
        </StyledProvider>
    );
};

export { message, modal, queryClient };
