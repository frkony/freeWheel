import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    ImageBackground,
    Image,
    ToastAndroid
} from 'react-native';
import {
    Button,
    Text,
} from 'react-native-paper'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home({ navigation }) {


    return (
        <SafeAreaView style={styleHome.container}>
            <ImageBackground source={require('../img/logo.png')} resizeMode='cover'
                style={styleHome.logo}/>
                <Text style={styleHome.txt} > Kategorini Seç..</Text>
                <Button mode='contained' style={styleHome.btn}
                    onPress={() => navigation.navigate('Friend', { title: 'Friend' })}><Text> Arkadaş </Text> </Button>
                <Button mode='contained' style={styleHome.btn}
                    onPress={() => navigation.navigate('Darlings')}><Text> Sevgili </Text></Button>
                <Button mode='contained' style={styleHome.btn}
                    onPress={() => navigation.navigate('ArtıOnSekiz')}><Text> + 18 </Text></Button>
            
        </SafeAreaView>
    )
}

const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffefd5'
    },
    logo: {
        width: width,
        height: height/2
    },
    txt: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',

    },
    btn: {
        backgroundColor: '#f5deb3',
        margin: 10
    }
})