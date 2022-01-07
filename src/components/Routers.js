import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Friend from '../screens/Friend';
import Darlings from '../screens/Darlings'
import ArtıOnSekiz from '../screens/ArtıOnSekiz';


const Stack = createNativeStackNavigator();

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={
                        {
                            title: 'Wheel of Destiny',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="Friend" component={Friend}
                    options={
                        {
                            title: 'Friend',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="Darlings" component={Darlings}
                    options={
                        {
                            title: 'Darlings',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="ArtıOnSekiz" component={ArtıOnSekiz}
                    options={
                        {
                            title: '+18',
                            headerTitleAlign: 'center',
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routers;