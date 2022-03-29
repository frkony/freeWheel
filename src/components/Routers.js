import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Friend from '../screens/Friend/Friend';
import Darlings from '../screens/Darlings/Darlings'
import ArtıOnSekiz from '../screens/ArtıOnSekiz/ArtıOnSekiz';
import OneriArti from '../screens/ArtıOnSekiz/OneriArti';
import OneriFri from '../screens/Friend/OneriFri';
import OneriDar from '../screens/Darlings/OneriDar';
import {
    Dimensions,
    Image,
} from 'react-native'
import { useTranslation } from 'react-i18next';


const Stack = createNativeStackNavigator();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/*function TitleLogo(){
    return(
        <Image style={{width:width,height:height/10,}} resizeMode='cover'
        source={require('../img/wheel.png')}/>
    )
}*/


function Routers() {

    const {t}=useTranslation();

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
                            title: t('FRIEND'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriFri" component={OneriFri}
                    options={
                        {
                            title: t('FRIEND'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="Darlings" component={Darlings}
                    options={
                        {
                            title: t('DARLING'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriDar" component={OneriDar}
                    options={
                        {
                            title: t('DARLING'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />

                <Stack.Screen name="ArtıOnSekiz" component={ArtıOnSekiz}
                    options={
                        {
                            title: t('SEXUALITY'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
                <Stack.Screen name="OneriArti" component={OneriArti}
                    options={
                        {
                            title: t('SEXUALITY'),
                            headerTitleAlign: 'center',
                            headerTransparent:true
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routers;