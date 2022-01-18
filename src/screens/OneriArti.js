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
    const [keyIndex, setKeyIndex] = useState(0)
    const [checked, setChecked] = useState([{}])
    const [checkedKamasutra, setCheckedKamasutra] = useState([])
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const showDialog2 = () => setVisible2(true);
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
    const hideDialog2 = () => setVisible2(false);

    const OneriZevk = [
        { name: 'Dirty Talk', content: 'Çirkin konuşma olarak tükrçeleştirilen bu kalıp, sex esnasında partnerizin zevk aldığı argo kelimeler ile konuşma olayıdır. seviyorsa bir deneyin derim :)' },
        { name: 'Soyunurken İzle', content: 'Sexi görselle desteklemek heyecanlı olacaktır. Partneriniz size temas ederken yavaş yavaş soyunmak onu dahada şehvetlendirebilir.' },
        { name: 'Birbirinizi Soyun', content: 'Az önce dediğimiz gibi ancak bu durumun karşılıklı olması ve kaçınılmaz temas sizi ateşlendirecektir.' },
        { name: 'Sıradanlıktan Çık', content: 'Hep aynı yerde aynı pozisyonda sıkılmış olabilirsiniz. sürekli aynı ışık ve pozisyonlarda iseniz bu durumu değiştirebilirsiniz. tüm sex yatakta geçiyorsa kucağınızla salonda koltuğa taşıyabilirsiniz partnerinizi. veya salon koltuğunda ufak dokunuşlarla sevişmeye başlayıp, mutfak masasında sex e başlarken tüm eğlenceyi yatak odasına taşıyabilirsiniz.' },
        { name: 'Sıradanlıktan Çık', content: 'Aynı pozisyonlar artık alışkanlık getirebilir. Kamasutra pozisyonlarını denediniz mi en popüler olanları sizin için derledik.' },
        { name: 'Kamasutra Pozisyonları', content: 'Sex Pozisyonlarının tarihine bakıldığında çinliler tarafından ilk çıkan pozisyonlar diyebiliriz.' },
        { name: 'Ön Sevişme', content: 'Tadına varana kadar bitirmeyin. partnerinizin her noktasına değdiğinizden emin olun, olun ki gizli zevk noktalarını keşfedebilirsiniz.' },
    ]
    const OneriOyuncaklar = [
        { name: 'Kelepçe', content: 'Peluş kelepçeler veya direk kelepçe seti fantezik bir dünyanız varsa bu standartı deneyebilirsiniz.' },
        { name: 'Kıyafet', content: 'Partnerinizle iletişim en önemlisidir. Hayal ettiği arzuladığı bir kıyafet veya model olabilir. 2 li zevk arttırımı için bu fantezi kıyafetler denenebilir(Genel Örn: Hizmetçi kıyafeti veya fantezi Gecelikler)' },
        { name: 'Vibratör', content: 'Vibratör veya dengine gelicek bir titreşimli alet. sex sırasında klitoriside uyarmak kadın partnerinizin zevkini katlayacaktır.' },
        { name: 'Anal Plug', content: 'Vajina ile Anal arasında bulunan Perineum bölgesi (P Noktası) bulunması ve uyarılması en kolay noktadır çift taraflı uyarın için bu oyuncak sex inize zevk katabilir.' },
    ]
    const OneriMuzik = [
        { name: 'Whiskey Blues', content: 'Slow ve Tiz Tınıları ile ortama romantik ve sexi bir hava katıcaktır.' },
        { name: 'Reggea', content: 'Bob marleyin başını çektiği bu müzik tarzı sakin ve keyifli bir sex tadınıza katkıda bulunacaktır.' },
        { name: 'Psycho Techno', content: 'Bir uyarıcı aldıysanız veya almasanızda Psycho Techo tarzı enerjinizi yükseltip çok daha performanslı ve heyecanı olmanızı sağlayacaktır.' },
        { name: 'Çift Olarak Sevdikleriniz', content: 'Ortak sevdiğiniz müziklerden açarak sex esnasında eşlik ederek daha eğlencel bir oortam oluşturabilirsiniz.' },
    ]
    const OneriOyun = [
        { name: 'Pişti Shot', content: 'Alkollü anda iseniz ve 52 li kart desteniz varsa karmaya başlayın. tamamen çıplak kalana kadar pişti yapmaya devam.' },
        { name: 'Uygulamamız', content: 'Yaptığımız önerilerden birkaç seçenek alarak bunları uygulayabilirsiniz.' },
        { name: 'Rol Play', content: 'Fantezi amaçlı olarak 2 farklı meslek veya 2 farklı yaşam içerisinde olan farklı insanlarmış gibi davranarak doğaçlama bir seneryoda gerçek bir sex deneyimi yaşayabilirsiniz.' },
    ]



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
            <Provider>
                <View style={styleOneriArti.content}>
                    <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Button mode='contained' onPress={() => { setCheckedKamasutra(kamasutra), showDialog() }}
                            style={styleOneriArti.btn}>
                            <Text>Kamasutra Pozisyonları</Text> </Button>
                        <Button mode='contained' onPress={() => { setChecked(OneriZevk), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Zevk</Text> </Button>
                        <Button mode='contained' onPress={() => { setChecked(OneriOyuncaklar), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Oyuncaklar</Text> </Button>
                        <Button mode='contained' onPress={() => { setChecked(OneriMuzik), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>Dinlenebilecek Müzikler</Text> </Button>
                        <Button mode='contained' onPress={() => { setChecked(OneriOyun), showDialog2() }}
                            style={styleOneriArti.btn}>
                            <Text>+18 Oyun</Text> </Button>
                        <Text style={styleOneriArti.txt}> Uygulama Gelişim Aşamasındadır. Bir Çok Yeni Gelişmelerle Güncellenecektir.</Text>
                    </View>
                </View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} style={styleOneriArti.dialog}>
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
                    <Dialog visible={visible2} onDismiss={hideDialog2} style={styleOneriArti.dialog}>
                        <ScrollView>
                            <Dialog.Title>{checked[keyIndex].name}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{checked[keyIndex].content}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions style={styleOneriArti.dialogAction}>
                                <Button onPress={backDialog}>Önceki</Button>
                                <Button onPress={hideDialog2}>Bitti</Button>
                                <Button onPress={nextDialog}>Sonraki</Button>
                            </Dialog.Actions>
                        </ScrollView>
                    </Dialog>
                </Portal>
            </Provider>
        </SafeAreaView>

    )
}

const styleOneriArti = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'flex-start',
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
    dialogImg: {
        width: Dialog.width,
        height: 300,
        marginTop: 5,
    },
    dialog: {
        backgroundColor: '#ffefd5'
    },
    dialogAction:{
        justifyContent:'space-between'
    }
})
