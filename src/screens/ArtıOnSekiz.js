import React,{useState} from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    ImageBackground,
    TouchableOpacity,
    Image,
    ToastAndroid
    } from 'react-native'

export default function ArtıOnSekiz() {

    var number = Math.floor(Math.random() * 1000)
    const [randomDeg, setRandomDeg] = useState(Math.floor(Math.random() * 1000))

    console.log('Random Deg: ', randomDeg)
    console.log('Random number: ', number)

    var rotateValue = new Animated.Value(0)
    const spin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', randomDeg + 'deg']
    })
    const startImageSpin = () => {

        Animated.timing(rotateValue, {
            toValue: 5,
            duration: 8000,
            useNativeDriver: false
        }).start(() => setRandomDeg(number))
    }

    return (
        <SafeAreaView style={styleArtıOnSekiz.container}>
            <ImageBackground source={require('../img/logo.png')} resizeMode='cover'
                style={styleArtıOnSekiz.container}>

                <Image style={styleArtıOnSekiz.wheelDecisionTriangle} source={require('../img/kararUcgeni.png')} />
                <Animated.Image style={styleArtıOnSekiz.wheelView, { transform: [{ rotate: spin }] }}
                    source={require('../img/wheel.png')} >

                </Animated.Image>

                <TouchableOpacity onPress={() => startImageSpin()}
                    style={styleArtıOnSekiz.tOpacity}>
                    <Text> Karar Ver </Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styleArtıOnSekiz = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-start',
        alignItems: 'center',

    }, viewTopacity: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 25,
        paddingTop: 75
    },
    tOpacity: {
        borderRadius: 15,
        width: '25%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'mediumorchid',
        fontSize: 12,
        marginTop: 15
    },
    wheelView: {
        borderWidth: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 512,
        borderWidth: 2,
        marginBottom: 15,
    },
    wheelDecisionTriangle: {
        width: 25,
        height: 25,
    }
})
