import { IMAGE_PREVIEW_URL } from '@/constants';
import { signatureMagazineMutation, useFindOneMagazine } from '@/lib/services';
import { dateFormatter } from '@/lib/utils';
import { useAppStore } from '@/store';
import { Button, Card, Divider, Flex, Image, List, Tag } from 'antd';
import { Modal } from 'antd/lib';
import { useSearchParams } from 'react-router-dom';

export const CheckInspectionModal = () => {
    const { isModal, setIsModal } = useAppStore();
    const [searchParams] = useSearchParams();
    const ispection = searchParams.get('inspection');
    const { data } = useFindOneMagazine(ispection as string);
    const { mutate } = signatureMagazineMutation();
    const close = () => {
        setIsModal(false);
    };
    const onSecces = () => {
        mutate(ispection as string);
        close();
    };

    return (
        <Modal
            width={800}
            onCancel={close}
            onOk={onSecces}
            title="Tekshiruv"
            open={isModal}
            footer={
                <Flex align="center" justify="end" gap={10}>
                    <Button onClick={close} danger>
                        Bekor qilish
                    </Button>
                    <Button type="primary" onClick={onSecces}>
                        Tasdiqlash
                    </Button>
                </Flex>
            }
        >
            <Divider>Kamchiliklar rasmi:</Divider>
            <Card title="Kamchiliklar rasmi">
                <Image height={350} style={{ width: '100%' }} src={`${IMAGE_PREVIEW_URL}/${data?.disadvantages_images.url}`} />
            </Card>
            <Divider>Tavsilotlar:</Divider>
            <List bordered>
                <List.Item>
                    <Tag color="green">Tekshiruv sanasi: </Tag>
                    {dateFormatter(data?.control_date as string)}
                </List.Item>
                <List.Item>
                    <Tag color="green">Kamchiliklar: </Tag>
                    {data?.omissions}
                </List.Item>
                <List.Item>
                    <Tag color="green">Komissiya: </Tag>
                    {data?.commissions}
                </List.Item>
            </List>
            <Divider>Bartaraf etilgan holati</Divider>
            <List bordered>
                <List.Item>
                    <Tag color="green">Bajarish sanasi: </Tag>
                    {dateFormatter(data?.complate_date as string)}
                </List.Item>
                <List.Item>
                    <Tag color="green">Chora tadbir: </Tag>
                    {data?.measures}
                </List.Item>
                {data?.complated_images && (
                    <List.Item>
                        <Image height={350} style={{ width: '100%' }} src={`${IMAGE_PREVIEW_URL}/${data?.complated_images?.url}`} />
                    </List.Item>
                )}
            </List>
        </Modal>
    );
};
