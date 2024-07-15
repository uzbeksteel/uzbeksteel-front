import { Card, Table } from '@/components';
import { useAppStore } from '@/store';

export const LowsTable = () => {
    const { setIsDrawer } = useAppStore();
    const columns = [
        {
            title: 'Т/р',
            dataIndex: 'id',
            key: 'name',
        },
        {
            title: 'номи',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'СХММваЭ департаменти таркибий   бўлинмаси',
            dataIndex: 'item',
            key: 'name',
        },
        {
            title: 'Сақлаш жойи (электрон шаклида)',
            dataIndex: 'place',
            key: 'name',
        },
    ];

    const data = [
        {
            id: 1,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
        {
            id: 2,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
        {
            id: 3,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
        {
            id: 4,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
        {
            id: 5,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
        {
            id: 6,
            name: 'ЎЗБЕКИСТОН РЕСПУБЛИКАСИНИНГ КОНСТИТУЦИЯСИ (1992 йил 8 декабрь)',
            item: 'СХБ ва ММБ',
            place: 'СХБ ва ММБ бошлиқлари  ва   муҳандислари',
        },
    ];

    const handleOpenDrawer = () => setIsDrawer(true);
    return (
        <Card>
            <Table isAdd={true} onClick={handleOpenDrawer} columns={columns} dataSource={data} titleTable="Асослар рўйхати" />
        </Card>
    );
};
