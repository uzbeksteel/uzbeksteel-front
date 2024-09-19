import { Box, Button, Icon, PageHeader, Table } from '@/components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { downloadFile, getAccidentByIdQuery } from '@/lib/services';
import dayjs from 'dayjs';
import { IAccidentOrderFile } from '@/types/accident.ts';
import { addMessage } from '@/lib/utils';

export const AccidentDetails = () => {
    const { pathname } = useLocation();
    const isWorkshop = pathname.includes(ROUTES.workshop);
    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = getAccidentByIdQuery(id!);
    const handleDownloadFile = async (id: string, fileName: string) => {
        try {
            const response = await downloadFile(id);

            const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            const fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', fileName);
            document.body.appendChild(fileLink);

            fileLink.click();

            fileLink.remove();
            window.URL.revokeObjectURL(fileURL);
        } catch (error) {
            addMessage(error);
        }
    };

    const orderColumns = [
        {
            title: 'Буйруқ шакли',
            dataIndex: 'orderShape',
            key: 'orderShape',
        },
        {
            title: 'Буйруқ сони',
            dataIndex: 'orderQuantity',
            key: 'orderQuantity',
        },
        {
            title: 'Изох',
            dataIndex: 'notes',
            key: 'notes',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: () => {
                return (
                    <Button type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Eye" /> Кўриш
                    </Button>
                );
            },
        },
    ];

    const orderFileColumns = [
        {
            title: 'Номи',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Сана',
            dataIndex: 'date',
            key: 'date',
            render: (text: string) => dayjs(text).format('DD.MM.YYYY'),
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: (_: any, record: IAccidentOrderFile) => {
                return (
                    <Button onClick={() => handleDownloadFile(record.file.id, record.name)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Download" /> Юклаш
                    </Button>
                );
            },
        },
    ];

    const actColumns = [
        {
            title: 'Т/р',
            dataIndex: '',
            key: 'id',
            width: '5%',
            // @ts-ignore
            render: (text, record, index) => index + 1,
            showSorterTooltip: false,
        },
        {
            title: 'Жабирланувчинг исми, фамиляси, отасинг исми',
            dataIndex: 'guiltyFullName',
            key: 'guiltyFullName',
        },
        {
            title: 'Ёши',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Касби',
            dataIndex: 'profession',
            key: 'profession',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: () => {
                return (
                    <Button type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Eye" /> Кўриш
                    </Button>
                );
            },
        },
    ];
    return (
        <>
            <PageHeader title="Бахтсиз ходисалар" />
            <Box $direction="column" $p="20px">
                <Box>
                    <Table isAdd={!isWorkshop || !!(data?.order || data?.orderFile)} titleTable="Буйруқлар рўйхати" columns={data?.orderFile ? orderFileColumns : orderColumns} dataSource={[data?.orderFile ? data?.orderFile : data?.order]} onClick={() => navigate(`${ROUTES.workshopAccidentsOrderAdd}?accidentId=${id}`)} />
                </Box>
                <Box>
                    <Table isAdd={!isWorkshop} titleTable="Актлар рўйхати" dataSource={data?.acts} columns={actColumns} onClick={() => navigate(`${ROUTES.workshopAccidentsActAdd}?accidentId=${id}`)} />
                </Box>
            </Box>
        </>
    );
};
