import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    ToastAndroid
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
    const hideDialog = () => {setVisible(false),setKeyIndex(0)};
    const [keyIndex, setKeyIndex] = useState(0);
    const [checked, setChecked] = useState([{}])
    const nextDialog = () => {
        if (keyIndex == checked.length-1) {
            ToastAndroid.show('Son Öneri', ToastAndroid.SHORT)
        } else {
            setKeyIndex(keyIndex + 1)
        }
    }
    const backDialog = () => {
        if (keyIndex == 0) {
            ToastAndroid.show('İlk Öneri', ToastAndroid.SHORT)
        } else {
            setKeyIndex(keyIndex - 1)
        }
    }
    const OneriAksamYemegi =[
        {name:'Ev Hali', content:'Dolabınızda neler var? Hangi yemeğe sevgi katarsan zaten güzel olacaktır. Yemek olarak değil, değer verdiğiniz insanın size yemek hazırlaması olarak bakarsanız zaten her gün keyifli akşam yemeği yiyeceksinizdir.'},
        {name:'Dışarda', content:'Dışarıda baş başa yenilecek köşe başı pilavcıları veya seyyar köfte arabasında ki satıcıları deneyebilirsiniz inanın bir restorattan daha keyifli olabilir.'},
        {name:'Restorant', content:'Tabii her insan bir değil restorantında farklı bir havası var. Çevrenizde denemediğiniz hangi mekan var haydi oraya.'},
    ]
    const OneriFilm =[
        {name:'Aşk', content:'1. Pride & Prejudice\n2.Eternal Sunshine of the Spotless Mind\n3. 50 First Dates\n4.Le fabuleux destin d Amélie Poulain / Amelie\n5. Before Sunrise'},
        {name:'Dram', content:'1. Kazablanka\n2. Hatırlanılacak Bir Anı\n3. Boş Ev\n4.Aşk\n5. Saksı Olmanın Faydaları'},
        {name:'Korku', content:'1. The Silence of The Lambs\n2.The Conjuring\n3.The House of the Devil\n4.As Above, So Below\n5.Cabin in the Woods'},
        {name:'Bilim Kurgu', content:'1.Edward Scissorhands\n2.Arrival\n3.Never Let Me Go\n4.Ex Machina\n5.The Jacket'},
    ]
    const OneriSohbet =[
        {name:'Tanışıyor muyuz?', content:'Birbirinizi ne kadar tanıdığınızı düşünüyorsunuz. istemediğiniz veya kırmızı çizgim dediğiniz özelliklerinizi biliyor musunuz? Yaşayarak sorun çıkmasına gerek yok haydi konuşun şimdi.'},
        {name:'Hoş Sohbet', content:'Geçirdiğiniz zaman zarfında hatırladığınız tatlı zamanlarınız var mı? Tekrar anlatıp neden keyiflenmiyorsunuz?'},
        {name:'Zıt Konular', content:'Birbirinize hangi konularda ters düşüyorsunuz? Objektif düşünerek ortada buluşabilecek misiniz?'},
        {name:'Hayal', content:'Şuandan sonrasında nasıl bir mekan, hayat veya olay örgüsünde olmak isterdiniz. Hayalin Ucu bucağı yoktur.'},
        {name:'Fanteziler', content:'En çok ne yapmak istiyorsunuz bu hayatta? Ve birlikte yapsaydınz ne kadar keyif alırdınız.'},
    ]


    return (
        <SafeAreaView style={styleOneriDar.container}>
            <Provider>
                <View style={styleOneriDar.content}>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriAksamYemegi) }}
                        style={styleOneriDar.btn}>
                        <Text>Akşam Yemeği</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriFilm) }}
                        style={styleOneriDar.btn}>
                        <Text>Film Turu</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriSohbet) }}
                        style={styleOneriDar.btn}>
                        <Text>Sohbet</Text> </Button>
                    
                    <Text style={styleOneriDar.txt}> Uygulama Gelişim Aşamasındadır. Bir Çok Yeni Gelişmelerle Güncellenecektir.</Text>
                </View>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} style={styleOneriDar.dialog}>
                        <ScrollView>
                            <Dialog.Title> {checked[keyIndex].name}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{checked[keyIndex].content}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions style={styleOneriDar.dialogAction}>
                                <Button onPress={backDialog}>Önceki</Button>
                                <Button onPress={hideDialog}>Bitti</Button>
                                <Button onPress={nextDialog}>Sonraki</Button>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#f5deb3',
        margin: 10,
    },
    dialogAction:{
        justifyContent:'space-between'
    },
    dialog: {
        backgroundColor: '#ffefd5'
    },
})