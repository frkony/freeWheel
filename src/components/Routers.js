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
import {
    Dimensions,
    Image,
} from 'react-native'
import {
    
    Icon
} from 'react-native-paper'



const Stack = createNativeStackNavigator();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function TitleLogo(){
    return(
        <Image style={{width:width,height:height/10,}} resizeMode='cover'
        source={require('../img/wheel.png')}/>
    )
}

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={
                        {
                            headerShown:false,
                            //headerTransparent:true
                        }} />
                <Stack.Screen name="Friend" component={Friend}
                    options={
                        {
                            title: 'Arkadaş',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriFri" component={OneriFri}
                    options={
                        {
                            title: 'Arkadaş Öneri Penceresi',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="Darlings" component={Darlings}
                    options={
                        {
                            title: 'Sevgili',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriDar" component={OneriDar}
                    options={
                        {
                            title: 'Sevgililere Öneri Penceresi',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />

                <Stack.Screen name="ArtıOnSekiz" component={ArtıOnSekiz}
                    options={
                        {
                            title: '+18',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriArti" component={OneriArti}
                    options={
                        {
                            title: 'Cinsellik Öneri Penceresi',
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routers;