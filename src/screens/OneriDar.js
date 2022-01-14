import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Button,
    Dialog,
    Paragraph,
    Portal,
    Provider,
    Text,
} from 'react-native-paper'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function OneriDar({ navigation }) {

    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const OneriData = [
        { key: 1, name: "Akşam Yemeği", content: "Akşam Yemeği" },
        { key: 2, name: "Film", content: "Film" },
        { key: 3, name: "SehirTuru", content: "Şehir Turu" },
        { key: 4, name: "Sohbet", content: "Sohbet" },
        { key: 5, name: "OyunGecesi", content: "Oyun Gecesi" },
    ]
    const [checkedTitle, setCheckedTitle] = useState('');
    const [checkedContent, setCheckedContent] = useState('')

    return (
        <SafeAreaView style={styleOneriDar.container}>
            <Provider>
                <View style={styleOneriDar.content}>
                    <Button mode='contained' onPress={() => { showDialog(), setCheckedContent(OneriData[0].content), setCheckedTitle(OneriData[0].name) }}
                        style={styleOneriDar.btn}>
                        <Text>Akşam Yemeği</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setCheckedContent(OneriData[1].content), setCheckedTitle(OneriData[1].name) }}
                        style={styleOneriDar.btn}>
                        <Text>Film Gecesi</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setCheckedContent(OneriData[2].content), setCheckedTitle(OneriData[2].name) }}
                        style={styleOneriDar.btn}>
                        <Text>Şehir Turu</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setCheckedContent(OneriData[3].content), setCheckedTitle(OneriData[3].name) }}
                        style={styleOneriDar.btn}>
                        <Text>Sohbet</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setCheckedContent(OneriData[4].content), setCheckedTitle(OneriData[4].name) }}
                        style={styleOneriDar.btn}>
                        <Text>Oyun Gecesi</Text> </Button>
                    <Text style={styleOneriDar.txt}> Uygulama Gelişim Aşamasındadır. Bir Çok Yeni Gelişmelerle Güncellenecektir.</Text>
                </View>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <ScrollView>
                            <Dialog.Title> {checkedTitle}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{checkedContent}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hideDialog}>Done</Button>
                            </Dialog.Actions>
                        </ScrollView>
                    </Dialog>
                </Portal>
            </Provider>
        </SafeAreaView>

    )
}

const styleOneriDar = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffefd5',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    btn: {
        backgroundColor: '#f5deb3',
        margin: 10,
    }
})
