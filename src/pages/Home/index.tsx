import React, { useCallback, useEffect, useState } from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { Text, View } from 'react-native';
import itemsFlavor from '../../items';

import logoImage from '../../assets/logo.png';

import {
    Container,
    Header,
    Logo,
    Title,
    ItemsList,
    ItemContainer,
    ItemImage,
    ItemInformation,
    Flavor,
    ContainerPrice,
    Quantity,
    Price,
    TotalPriceItem,
    Buttons,
    Button,
    TotalContainer,
    TotalButtons,
    OpenResumeButton,
    ClearValuesButton,
    TotalInformation,
    TotalItems,
    TotalPrice,
    Resume,
    ResumeContent,
    ResumeContainer,
    ResumeTitle,
    ResumeInformation,
    ResumeItem,
    ResumeItemQuantity,
    ResumeItemFlavor,
    ResumeItemTotal,
    ResumeTotalItemsPrice,
    ResumeTotal,
    ResumeInput,
    ResumeCalculeteExcessButton,
    ResumeButtons,
    ResumeButtonText,
    ResumeCloseButton,
    Excess,
    ExcessText,
} from './styles';

export interface IItem {
    id: string;
    flavor: string;
    price: number;
    quantity: number;
    uri: string;
}

const Home: React.FC = () => {
    const [items, setItems] = useState<IItem[]>([]);
    const [totalPrice, setTotalPrice] = useState('0,00');
    const [totalItem, setTotalItems] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [payment, setPayment] = useState('');
    const [excess, setExcess] = useState('');

    useEffect(() => {
        setItems(itemsFlavor);
    }, []);

    const handleIncrement = useCallback(
        (id: string) => {
            setItems(
                items.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                }),
            );

            const findItem = items.find(item => item.id === id);

            if (findItem) {
                const calculateTotalPrice = (
                    Number(totalPrice.replace(',', '.')) +
                    Number(findItem.price)
                )
                    .toFixed(2)
                    .replace('.', ',');

                setTotalPrice(calculateTotalPrice);
                setTotalItems(totalItem + 1);
            }
        },
        [items, totalPrice, totalItem],
    );

    const handleDecrement = useCallback(
        (id: string) => {
            setItems(
                items.map(item => {
                    if (item.id === id) {
                        if (item.quantity === 0) {
                            return item;
                        }
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                }),
            );

            const findItem = items.find(item => item.id === id);

            if (findItem) {
                if (totalItem > 0) {
                    const calculateTotalPrice = (
                        Number(totalPrice.replace(',', '.')) -
                        Number(findItem.price)
                    )
                        .toFixed(2)
                        .replace('.', ',');

                    setTotalPrice(calculateTotalPrice);
                    setTotalItems(totalItem - 1);
                }
            }
        },
        [items, totalPrice, totalItem],
    );

    const handleCloseModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setModalVisible(true);
    }, []);

    const handleSetPayment = useCallback((payment: string) => {
        setPayment(payment);
    }, []);

    const calculateExcess = useCallback(() => {
        if (payment !== '') {
            setExcess(
                (Number(payment) - Number(totalPrice.replace(',', '.')))
                    .toFixed(2)
                    .replace('.', ','),
            );
        }
    }, [totalPrice, payment]);

    const handleClearValues = useCallback(() => {
        setItems(itemsFlavor);
        setTotalPrice('0,00');
        setTotalItems(0);
        setPayment('');
        setExcess('');
    }, []);

    return (
        <Container>
            <Header>
                <Logo source={logoImage} />
                <Title>Xup Xup Geladinhos Gourmet</Title>
            </Header>

            <ItemsList
                data={items}
                keyExtractor={item => item.id}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{
                    height: 80,
                }}
                renderItem={({ item }) => (
                    <ItemContainer>
                        <ItemImage
                            source={{
                                uri: item.uri,
                            }}
                        />
                        <ItemInformation>
                            <Flavor key={item.flavor}>{item.flavor}</Flavor>
                            <ContainerPrice>
                                <Quantity>{item.quantity} x </Quantity>
                                <Price>R$ {item.price}</Price>
                            </ContainerPrice>
                            <TotalPriceItem>
                                <Text>R$</Text> {item.quantity * item.price}
                            </TotalPriceItem>
                        </ItemInformation>
                        <Buttons>
                            <Button onPress={() => handleIncrement(item.id)}>
                                <FeatherIcons
                                    name="plus"
                                    color="#fff"
                                    size={16}
                                />
                            </Button>
                            <Button onPress={() => handleDecrement(item.id)}>
                                <FeatherIcons
                                    name="minus"
                                    color="#fff"
                                    size={16}
                                />
                            </Button>
                        </Buttons>
                    </ItemContainer>
                )}
            />
            <TotalContainer>
                <TotalButtons>
                    <OpenResumeButton onPress={handleOpenModal}>
                        <FeatherIcons name="file" color="#6276a0" size={18} />
                    </OpenResumeButton>
                    <ClearValuesButton onPress={handleClearValues}>
                        <FeatherIcons
                            name="x-circle"
                            color="#6276a0"
                            size={18}
                        />
                    </ClearValuesButton>
                </TotalButtons>
                <TotalInformation>
                    <TotalItems>
                        {totalItem}{' '}
                        {totalItem > 1 || totalItem === 0 ? ' itens' : ' item'}
                    </TotalItems>
                    <TotalPrice>R$ {totalPrice}</TotalPrice>
                </TotalInformation>
            </TotalContainer>

            <Resume animationType="slide" visible={modalVisible}>
                <ResumeContainer>
                    <ResumeContent showsVerticalScrollIndicator={false}>
                        <ResumeTitle>Resumo da Venda</ResumeTitle>
                        <ResumeInformation>
                            {items
                                .filter(item => item.quantity > 0)
                                .map(item => (
                                    <ResumeItem key={item.id}>
                                        <ResumeItemQuantity>
                                            {item.quantity} x{' '}
                                        </ResumeItemQuantity>
                                        <ResumeItemFlavor>
                                            {item.flavor}
                                        </ResumeItemFlavor>
                                        <ResumeItemTotal>
                                            R${' '}
                                            {(item.price * item.quantity)
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </ResumeItemTotal>
                                    </ResumeItem>
                                ))}
                        </ResumeInformation>

                        <ResumeTotalItemsPrice>
                            <TotalItems
                                style={{
                                    color: '#000',
                                    marginTop: 8,
                                    fontSize: 16,
                                }}
                            >
                                {totalItem}{' '}
                                {totalItem > 1 || totalItem === 0
                                    ? ' itens'
                                    : ' item'}
                            </TotalItems>

                            <ResumeTotal>R$ {totalPrice}</ResumeTotal>
                        </ResumeTotalItemsPrice>

                        <Excess>
                            {Number(excess.replace(',', '.')) >= 0 &&
                                excess !== '' && (
                                    <ExcessText>Troco: R$ {excess}</ExcessText>
                                )}

                            {Number(excess.replace(',', '.')) < 0 &&
                                excess !== '' && (
                                    <ExcessText style={{ color: '#E83F5B' }}>
                                        O Pagamento é menor do que o valor da
                                        venda
                                    </ExcessText>
                                )}
                        </Excess>

                        <ResumeInput
                            placeholder="Valor pago"
                            value={payment}
                            onChangeText={payment => handleSetPayment(payment)}
                        />

                        <ResumeButtons>
                            <ResumeCalculeteExcessButton>
                                <ResumeButtonText onPress={calculateExcess}>
                                    Calcular troco
                                </ResumeButtonText>
                            </ResumeCalculeteExcessButton>
                            <ResumeCloseButton onPress={handleCloseModal}>
                                <ResumeButtonText>Fechar</ResumeButtonText>
                            </ResumeCloseButton>
                        </ResumeButtons>
                    </ResumeContent>
                </ResumeContainer>
            </Resume>
        </Container>
    );
};

export default Home;
