import { Box, Loading } from '@/components';
import { StyledParagraph } from '@/components/typography/style';
import { useGetInitWorkTrainingQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { Checkbox } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { Content } from '../../components';
import { CreateModal } from './components';

export const InitWorkTraining = () => {
    const { setIsModal } = useAppStore();
    const { id } = useParams();
    const { data, isLoading } = useGetInitWorkTrainingQuery(id!);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Content
                onclick={() => {
                    setIsModal(true);
                }}
                title="Иш жойда дастлабки тайёргарлик"
            >
                <Box
                    $justify="space-between"
                    $p="20px"
                    $align="end"
                    $m="10px"
                    style={{
                        background: '#fff',
                        boxShadow: '0px 0px 1px #E5E5E5',
                    }}
                >
                    <Box $gap="25px" $direction="column">
                        <div>
                            <span style={{ fontWeight: 'bold', marginRight: '8px' }}>2.</span>
                            <span>Иш жойда дастлабки тайёргарлик</span>
                        </div>

                        <StyledParagraph>
                            <Link style={{ color: 'orange', fontWeight: 'bold' }} to="#">
                                {data?.program?.name || '________________'}
                            </Link>{' '}
                            дастури доирасида ва кўрсатмаларга мувофиқ ўтказилади
                        </StyledParagraph>

                        <StyledParagraph>Мен бажарилаётган иш учун хавфсизлик чоралари бўйича кўрсатмалар олдим.</StyledParagraph>
                    </Box>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Checkbox checked={data?.master_signature || false} style={{ marginBottom: '8px' }} disabled={true}>
                            Мастер имзоси
                        </Checkbox>
                        <Checkbox checked={data?.employee_signature || false} disabled={true}>
                            Ишчи имзоси
                        </Checkbox>
                    </div>
                </Box>
            </Content>
            <CreateModal />
        </>
    );
};
