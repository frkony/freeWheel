import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    ImageBackground,
    Image,
    ToastAndroid,
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
import styles from '../styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function OneriArti({ navigation }) {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const showDialog = () => setVisible(true);
    const showDialog2 = () => setVisible2(true);
    const hideDialog = () => setVisible(false);
    const hideDialog2 = () => setVisible2(false);

    const OneriData = [
        { key: 1, name: 'Kamasutra Pozisyonları', content: ' ', img: '' },
        { key: 2, name: 'Zevk Ortamları', content: ' ', img: '' },
        { key: 3, name: 'Oyuncaklar', content: ' ', img: '' },
        { key: 4, name: 'DinlenebilecekMüzikler', content: ' ', img: '' },
        { key: 5, name: 'OyunGecesi', content: ' ', img: '' },
    ]
    const [checkedTitle, setCheckedTitle] = useState('');
    const [checkedContent, setCheckedContent] = useState('')
    const [checkedKamasutra, setCheckedKamasutra] = useState([])

    const kamasutra = [
        { key: 1, name: 'Erotik', content: '', img: require('../img/kamasutra/01-erotikv.jpg') },
        { key: 2, name: 'Kelebek', content: '', img: require('../img/kamasutra/02-kelebek.jpg') },
        { key: 3, name: 'Tutkunun Dili', content: '', img: require('../img/kamasutra/03-tutkunun-dili.jpg') },
        { key: 4, name: 'Denge', content: '', img: require('../img/kamasutra/04-denge.jpg') },
        { key: 5, name: 'Bambu', content: '', img: require('../img/kamasutra/05-bambu.jpg') },
        { key: 6, name: 'Kıvrılmış Melek', content: '', img: require('../img/kamasutra/06-kivrilmis-melek.jpg') },
        { key: 7, name: 'Köprü', content: '', img: require('../img/kamasutra/07-kopru.jpg') },
        { key: 8, name: 'Bağlanma', content: '', img: require('../img/kamasutra/08-baglanma.jpg') },
        { key: 9, name: 'Yakın Temas', content: '', img: require('../img/kamasutra/09-yakin-temas.jpg') },
        { key: 10, name: 'Üst üste', content: '', img: require('../img/kamasutra/10-ust-uste.jpg') },
        { key: 11, name: 'Baştan Çıkartma', content: '', img: require('../img/kamasutra/11-bastan-cikarmna.jpg') },
        { key: 12, name: 'Çömelen Kaplan', content: '', img: require('../img/kamasutra/13-comelen-kaplan.jpg') },
        { key: 13, name: 'Yunus', content: '', img: require('../img/kamasutra/15-yunus.jpg') },
        { key: 14, name: 'Kurbağa', content: '', img: require('../img/kamasutra/16-kurbaga.jpg') },
        { key: 15, name: 'Tutuşan Ardıç', content: '', img: require('../img/kamasutra/17-tutusan-ardic.jpg') },
        { key: 16, name: 'El Arabası', content: '', img: require('../img/kamasutra/18-el-arabasi.jpg') },
        { key: 17, name: 'Çivileme', content: '', img: require('../img/kamasutra/19-civileme.jpg') },
        { key: 18, name: 'Klasik', content: '', img: require('../img/kamasutra/20-klasik.jpg') },
        { key: 19, name: 'Diz Üstü', content: '', img: require('../img/kamasutra/21-diz-ustu.jpg') },
        { key: 20, name: 'Artı', content: '', img: require('../img/kamasutra/22-arti.jpg') },
        { key: 21, name: 'Tekerlek', content: '', img: require('../img/kamasutra/23-tekerlek.jpg') },
        { key: 22, name: 'Sandalye', content: '', img: require('../img/kamasutra/24-sandalye.jpg') },
        { key: 23, name: 'Üçgen', content: '', img: require('../img/kamasutra/25-ucgen.jpg') },
        { key: 24, name: 'Sakıncalı Film', content: '', img: require('../img/kamasutra/26-sakincali-film.jpg') },
        { key: 25, name: 'Nirvana', content: '', img: require('../img/kamasutra/27-nirvana.jpg') },
        { key: 26, name: 'Asma Kilit', content: '', img: require('../img/kamasutra/28-asma-kilit.jpg') },
        { key: 27, name: 'Geçiş', content: '', img: require('../img/kamasutra/29-gecis.jpg') },
        { key: 28, name: 'Maymun', content: '', img: require('../img/kamasutra/30-maymun.jpg') },

    ]

    return (
        <SafeAreaView style={styleOneriArti.container}>

            <ImageBackground source={require('../img/logo.png')} resizeMode='cover'
                style={styleOneriArti.container}>
                <Provider>
                    <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Button mode='contained' onPress={() => { setCheckedKamasutra(kamasutra), showDialog() }}
                            style={styleOneriArti.btn}>
                            <Text>Kamasutra Pozisyonları</Text> </Button>
                        <Button mode='contained' onPress={() => { setCheckedContent(OneriData[1].content), setCheckedTitle(OneriData[1].name), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Zevk Ortamları</Text> </Button>
                        <Button mode='contained' onPress={() => { setCheckedContent(OneriData[2].content), setCheckedTitle(OneriData[2].name), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Oyuncaklar</Text> </Button>
                        <Button mode='contained' onPress={() => { setCheckedContent(OneriData[3].content), setCheckedTitle(OneriData[3].name), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Dinlenebilecek Müzikler</Text> </Button>
                        <Button mode='contained' onPress={() => { setCheckedContent(OneriData[4].content), setCheckedTitle(OneriData[4].name), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Oyun Gecesi</Text> </Button>
                    </View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <ScrollView>
                                <Dialog.Title><Text>Kamasutra Pozisyonları</Text></Dialog.Title>
                                <Dialog.Content>{checkedKamasutra.map((data) => {
                                    return (
                                        <View>
                                            <Text> {data.name}</Text>
                                            <Image key={data.key} source={data.img} resizeMode='cover'
                                                style={styleOneriArti.dialogImg} />
                                        </View>
                                    )
                                })}</Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </ScrollView>
                        </Dialog>
                    </Portal>
                    <Portal>
                        <Dialog visible={visible2} onDismiss={hideDialog2}>
                            <ScrollView>
                                <Dialog.Title><Text>{checkedTitle}</Text></Dialog.Title>
                                <Dialog.Content><Text>{checkedContent}</Text></Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog2}>Done</Button>
                                </Dialog.Actions>
                            </ScrollView>
                        </Dialog>
                    </Portal>
                </Provider>
            </ImageBackground>
        </SafeAreaView>

    )
}

const styleOneriArti = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',

    },
    txt: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',

    },
    btn: {
        backgroundColor: '#f5deb3',
        margin: 10,
        justifyContent: 'flex-end'
    },
    dialogImg: {
        width: Dialog.width,
        height: 300,
        marginTop: 5,
    }
})
