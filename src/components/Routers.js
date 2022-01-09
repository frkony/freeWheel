import React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Friend from '../screens/Friend';
import Darlings from '../screens/Darlings'
import ArtıOnSekiz from '../screens/ArtıOnSekiz';
import OneriArti from '../screens/OneriArti';
import OneriFri from '../screens/OneriFri';
import OneriDar from '../screens/OneriDar';


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
                            title: 'Arkadaş',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="OneriFri" component={OneriFri}
                    options={
                        {
                            title: 'Arkadaş Öneri Penceresi',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="Darlings" component={Darlings}
                    options={
                        {
                            title: 'Sevgili',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="OneriDar" component={OneriDar}
                    options={
                        {
                            title: 'Sevgili Öneri Penceresi',
                            headerTitleAlign: 'center',
                        }} />

                <Stack.Screen name="ArtıOnSekiz" component={ArtıOnSekiz}
                    options={
                        {
                            title: '+18',
                            headerTitleAlign: 'center',
                        }} />
                <Stack.Screen name="OneriArti" component={OneriArti}
                    options={
                        {
                            title: 'Cinsellik Öneri Penceresi',
                            headerTitleAlign: 'center',
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routers;