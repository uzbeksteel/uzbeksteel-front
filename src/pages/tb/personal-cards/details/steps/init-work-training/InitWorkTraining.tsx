import { Box } from '@/components';
import { StyledParagraph } from '@/components/typography/style';
import { useAppStore } from '@/store';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { Content } from '../../components';
import { CreateModal } from './components';

export const InitWorkTraining = () => {
    const { setIsModal } = useAppStore();

    return (
        <>
            <Content
                onclick={() => {
                    console.log('salom');

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
                            <Link to="#">Lorem ipsum dolor</Link> дастури доирасида ва кўрсатмаларга мувофиқ ўтказилади
                        </StyledParagraph>

                        <StyledParagraph>Мен бажарилаётган иш учун хавфсизлик чоралари бўйича кўрсатмалар олдим.</StyledParagraph>
                    </Box>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Checkbox defaultChecked style={{ marginBottom: '8px' }}>
                            Мастер имзоси
                        </Checkbox>
                        <Checkbox defaultChecked>Ишчи имзоси</Checkbox>
                    </div>
                </Box>
            </Content>
            <CreateModal />
        </>
    );
};
