import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';

const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" translucent />
            <View style={{ flex: 1, backgroundColor: '##E5E5E5' }}>
                <Routes />
            </View>
        </NavigationContainer>
    );
};

export default App;
