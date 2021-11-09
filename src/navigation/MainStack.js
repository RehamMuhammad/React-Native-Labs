import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen, MovieScreen } from '../screens';

const RootStack = createNativeStackNavigator();

const MainStack = () => (
    <RootStack.Navigator>
        <RootStack.Screen component={SearchScreen} name={'Search'} />
        <RootStack.Screen component={MovieScreen}  name={'Movie'} />
    </RootStack.Navigator>
)


export default MainStack;