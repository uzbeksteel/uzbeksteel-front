import { Box, Card, Loading } from '@/components';
import { useIntroBriefingQuery } from '@/lib/services';
import { dateFormatter } from '@/lib/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { Content } from '../../components/Content';

export const IntroductoryBriefing = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useIntroBriefingQuery(id!);

    if (isLoading) {
        return <Loading />;
    }

    const onClick = () => {
        navigate('add');
    };

    return (
        <Content title="1. Вводный инструктаж" onclick={onClick}>
            <Box $m="20px">
                <Card>
                    <h3>1. Вводный инструктаж</h3>
                    <p>
                        <span style={{ color: 'orange' }}>{data?.fullName ?? '__________________'}</span> прослушал вводный инструктаж по охране труда, промышленной безопасности, санинструктаж, противопожарный инструктаж при поступлении на работу. «_______» <span style={{ color: 'orange' }}>{data?.dateTime ? dateFormatter(data?.dateTime) : '_____________ _______ '}</span>. Подпись инженера ООТиПБ Подпись получившего инструктаж{' '}
                    </p>
                </Card>
            </Box>
        </Content>
    );
};
