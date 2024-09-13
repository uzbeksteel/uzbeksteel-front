import { Box, Card } from '@/components';
import { Flex, Image } from 'antd';
import { Content } from './components/Content';
import * as S from './styled';

export const PersonalCardDetails = () => {
    return (
        <Content title="Ишчилар шахсий карталари">
            <Box $p="20px" $gap="10px" style={{ background: '#FFF', marginTop: '20px' }}>
                <Card>
                    <S.Title>Меҳнатни муҳофаза қилиш ва саноат хавфсизлиги бўйича брифинг ва тренинг</S.Title>
                    <Flex gap={40}>
                        <Flex gap={10}>
                            <Image width={168} height={224} />
                            <S.List>
                                <S.List.Item>
                                    <p>Фамилия И.О.</p> Анвар Бахадирович Акромов
                                </S.List.Item>
                                <S.List.Item>
                                    <p>Должность, профессия</p> Муҳандис
                                </S.List.Item>
                                <S.List.Item>
                                    <p>Таб.№</p> 25347
                                </S.List.Item>
                                <S.List.Item>
                                    <p>Образование</p> Среднее образование
                                </S.List.Item>
                            </S.List>
                        </Flex>
                        <S.List>
                            <S.List.Item>
                                <p>Год рождения</p>12.06.1992
                            </S.List.Item>
                            <S.List.Item>
                                <p>Цех</p>Сталепроволочный
                            </S.List.Item>
                            <S.List.Item>
                                <p>Дата поступления на работу</p>01.02.2012
                            </S.List.Item>
                        </S.List>
                    </Flex>
                </Card>
            </Box>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF', marginTop: '20px' }}>
                <S.List>
                    <S.Link to={'#'}>1. Вводный инструктаж</S.Link>
                    <S.Link to={'#'}>2. Первичный нструктаж на рабочем месте</S.Link>
                    <S.Link to={'#'}>3. Распоряжение</S.Link>
                    <S.Link to={'#'}>4. Протокол-разрешение</S.Link>
                    <S.Link to={'#'}>5. Сведения о проверке знаний по охране труда и промышленной безопасности</S.Link>
                    <S.Link to={'#'}>6. Сведения о прохождении периодического (повторного) инструктажа и обучения</S.Link>
                    <S.Link to={'#'}>7. Сведения о внеочередном инструктаже.</S.Link>
                    <S.Link to={'#'}>8. Сведения о прохождении специального технического обучения</S.Link>
                    <S.Link to={'#'}>9. Отметка о вручении инструкций по охране труда, промышленной безопасности и производственной санитарии</S.Link>
                    <S.Link to={'#'}>10. Сведения о прохождении медицинского осмотра</S.Link>
                </S.List>
            </Box>
        </Content>
    );
};
