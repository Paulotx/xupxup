import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { IItem } from './index';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    margin-top: 50px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 40px;
    width: 60px;
`;
export const Title = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Medium';
    margin-top: 4px;
`;

export const ItemsList = styled(FlatList as new () => FlatList<IItem>)`
    padding: 0 4%;
`;

export const ItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    background-color: #fff;
    margin-bottom: 16px;
    border-radius: 8px;
`;

export const ItemImage = styled.Image`
    height: 100px;
    width: 120px;
`;

export const ItemInformation = styled.View`
    flex: 1;
    height: 100%;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Flavor = styled.Text`
    font-size: 16px;
    color: #000;
    font-family: 'Roboto-Medium';
`;

export const ContainerPrice = styled.View`
    display: flex;
    flex-direction: row;
`;
export const Quantity = styled.Text`
    font-family: 'Comfortaa-Medium';
`;

export const Price = styled.Text`
    font-family: 'Comfortaa-Medium';
`;

export const TotalPriceItem = styled.Text`
    position: absolute;
    font-size: 18px;
    bottom: 0px;
`;
export const Buttons = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    background: #6276a0;
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 5px;
`;

export const TotalContainer = styled.View`
    padding: 6px 4%;
    background-color: #6276a0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TotalButtons = styled.View`
    display: flex;
    flex-direction: row;
`;

export const OpenResumeButton = styled.TouchableOpacity`
    background: #ddd;
    border-radius: 5px;
    padding: 12px;
    margin-right: 8px;
`;

export const ClearValuesButton = styled.TouchableOpacity`
    background: #ddd;
    border-radius: 5px;
    padding: 12px;
`;

export const TotalInformation = styled.View``;

export const TotalItems = styled.Text`
    font-size: 14px;
    color: #fff;
    font-family: 'Comfortaa-Regular';
`;

export const TotalPrice = styled.Text`
    font-size: 20px;
    color: #fff;
    font-family: 'Roboto-Medium';
`;

export const Resume = styled.Modal``;

export const ResumeContent = styled.ScrollView``;

export const ResumeContainer = styled.View`
    padding: 32px 8% 0 8%;
    background-color: #e5e5e5;
    flex: 1;
`;

export const ResumeTitle = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 24px;
    text-align: center;
`;

export const ResumeInformation = styled.View`
    margin-top: 32px;
`;

export const ResumeItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ResumeItemQuantity = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 16px;
`;

export const ResumeItemFlavor = styled.Text`
    flex: 1;
    font-family: 'Roboto-Regular';
    font-size: 16px;
`;

export const ResumeItemTotal = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 20px;
`;

export const ResumeTotalItemsPrice = styled.View`
    align-items: flex-end;
`;

export const ResumeTotal = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: 24px;
`;

export const ResumeInput = styled.TextInput`
    border: 1px solid #6276a0;
    border-radius: 4px;
    background: #fff;
    margin-top: 32px;
    padding: 8px 12px;
`;

export const ResumeButtons = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const ResumeCalculeteExcessButton = styled.TouchableOpacity`
    background: #6276a0;
    border-radius: 5px;
    padding: 12px;
    width: 50%;
    margin-right: 5px;
`;

export const ResumeCloseButton = styled.TouchableOpacity`
    background: #999;
    border-radius: 5px;
    padding: 12px;
    width: 50%;
    margin-left: 5px;
`;

export const ResumeButtonText = styled.Text`
    font-family: 'Roboto-Regular';
    color: #fff;
    text-align: center;
`;

export const Excess = styled.View`
    margin-top: 32px;
`;

export const ExcessText = styled.Text`
    font-size: 20px;
    font-family: 'Roboto-Regular';
    text-align: center;
`;

export const Footer = styled.View`
    padding: 0 8% 16px 8%;
    background: #e5e5e5;
`;
