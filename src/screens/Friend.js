import React, { useState } from 'react'
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
    ToastAndroid,
    ScrollView
} from 'react-native'
import {
    TextInput,
    Dialog,
    Portal,
    Paragraph,
    Button,
    Provider
} from 'react-native-paper'

const { width, height } = Dimensions.get('window');

export default function Friend({ route }) {


    var number = Math.floor(Math.random() * 360) + 2880
    const [randomDeg, setRandomDeg] = useState(Math.floor(Math.random() * 360) + 2880)
    const [sonuc, setSonuc] = useState('')
    console.log('Random Deg: ', randomDeg)
    console.log('Random number: ', number)

    var rotateValue = new Animated.Value(0)
    const rotateSpin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', randomDeg + 'deg']
    })
    const startImageSpin = () => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        }).start(() => {
            console.log('Finished Random Deg', randomDeg - 2880)
            if (0 < randomDeg - 2880 && randomDeg - 2880 < 60) {
                ToastAndroid.show('0-60', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility1)
            }
            else if (60 < randomDeg - 2880 && randomDeg - 2880 < 120) {
                ToastAndroid.show('60-120', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility2)
            } else if (120 < randomDeg - 2880 && randomDeg - 2880 < 180) {
                ToastAndroid.show('120-180', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility3)
            } else if (180 < randomDeg - 2880 && randomDeg - 2880 < 240) {
                ToastAndroid.show('180-240', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility4)
            } else if (240 < randomDeg - 2880 && randomDeg - 2880 < 300) {
                ToastAndroid.show('240-300', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility5)
            } else if (300 < randomDeg - 2880 && randomDeg - 2880 < 360) {
                ToastAndroid.show('300-360', ToastAndroid.SHORT)
                showDialog()
                setSonuc(possibility6)
            } else {
                ToastAndroid.show('Şanssızlık, Bir Karar Veremedin. Tekrar Dene', ToastAndroid.SHORT)
            }
            setRandomDeg(number)
        })
    }

    const [possibility1, setPossibility1] = useState('')
    const [possibility2, setPossibility2] = useState('')
    const [possibility3, setPossibility3] = useState('')
    const [possibility4, setPossibility4] = useState('')
    const [possibility5, setPossibility5] = useState('')
    const [possibility6, setPossibility6] = useState('')

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <SafeAreaView style={styleFriend.container}>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground source={require('../img/logo.png')} resizeMode='cover'
                    style={styleFriend.container}>
                    <View style={styleFriend.txtInputView}>
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#20b2aa' }]} mode='outlined' label={'ihtimal 1'}
                            onChangeText={setPossibility1} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#a52a2a' }]} mode='outlined' label={'ihtimal 2'}
                            onChangeText={setPossibility2} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                    </View>
                    <View style={styleFriend.txtInputView}>
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#ffd700' }]} mode='outlined' label={'ihtimal 3'}
                            onChangeText={setPossibility3} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#32cd32' }]} mode='outlined' label={'ihtimal 4'}
                            onChangeText={setPossibility4} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                    </View>
                    <View style={styleFriend.txtInputView}>
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#9370db' }]} mode='outlined' label={'ihtimal 5'}
                            onChangeText={setPossibility5} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                        <TextInput style={[styleFriend.txtInput, { backgroundColor: '#ff00ff' }]} mode='outlined' label={'ihtimal 6'}
                            onChangeText={setPossibility6} placeholder='Bir ihtimal Giriniz.'
                            maxLength={10} />
                    </View>

                    <Image style={styleFriend.wheelDecisionTriangle} source={require('../img/kararUcgeni.png')} />
                    <Animated.Image style={styleFriend.wheelView, { transform: [{ rotate: rotateSpin }] }}
                        source={require('../img/wheel.png')} />

                    <TouchableOpacity onPress={() => startImageSpin()}
                        style={styleFriend.tOpacity}>
                        <Text> Karar Ver </Text>
                    </TouchableOpacity>
                </ImageBackground>
                <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title>Vakit Geldiii</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{sonuc}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hideDialog}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
            </ScrollView>
        </SafeAreaView>
    )
}

const styleFriend = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    txtInputView: {
        width: width,
        height: 300,
        flexDirection: 'row',
        height: 60,
        marginTop: 5,
        marginBottom: 5,
    },
    txtInput: {
        justifyContent: 'center',
        width: width / 2,
        height: 50,
        marginLeft: 5
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
        width: width,
        height: height / 2,
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
