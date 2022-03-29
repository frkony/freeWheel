import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
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

export default function OneriFri({ navigation }) {

    const [visible, setVisible] = useState(false);
    const [keyIndex, setKeyIndex] = useState(0)
    const [checked, setChecked] = useState([{}])
    const showDialog = () => setVisible(true);
    const hideDialog = () => { setVisible(false), setKeyIndex(0) };
    const nextDialog = () => {
        if (keyIndex == checked.length - 1) {
            ToastAndroid.show('Son Öneri', ToastAndroid.SHORT)
        }
        else {
            setKeyIndex(keyIndex + 1)
        }
    }
    const backDialog = () => {
        if (keyIndex == 0) {
            ToastAndroid.show('İlk Öneri', ToastAndroid.SHORT)
        }
        else {
            setKeyIndex(keyIndex - 1)
        }
    }
    console.log('keyIndex', keyIndex)
    const OneriSohbet = [
        { name: 'Dedikodu', content: 'Dedikoduyu sever misiniz? Biz tavsiye etmeyiz ancak şöyle sakince bir oturup insanları çekiştirebilirsiniz. Detayları unutmadığınızdan emin olun.' },
        { name: 'Felsefe', content: 'İllaki bir yazar,olay veya savunulan konuyu tartışmanıza gerek yok. Benimsediğiniz veya öyle olması gerektiğini düşündüğünüz bir konuyu ele alarak objektif olarak tartışabilirsiniz. Tabiki birbirinizi kırmadan.' },
        { name: 'İlginç Bilgiler', content: 'Aklınızda olan ve arkadaşlarınıza yararı olacağını düşündüğünüz bilgiler mi var? O zaman arkadaşınızda gördüğünüz bir problem üzerine oturup konuşabilirsiniz.' },
        { name: 'Sorgulamak', content: 'Din, Dil veya Irklar sizce nasıl ortaya çıktı? Hayatınızda insanların, size neden o şekilde davrandığını veya çok fazla konuyu sorgulayabilirsiniz belki birşeyleri anlamanıza yardımcı oluruz.' },
        { name: 'Mitoloji', content: 'Diğer Irklardaki Efsanevi hikayeleri ilginizi çekiyor veya biliyor musunuz? Bu konuda arkadaşlarınızla sohbet edebilirsiniz.' },
        { name: 'Film', content: 'Size ilginç gelen veya en sevdiğiniz popüler/popüler olmayan filmleri arkadaşlarınızla paylaşıp üzerinde sohbet edebilirsiniz.' },
    ]
    const OneriSehirTuru = [
        { name: 'Çevreniz', content: 'Etrafınızda hep aynı mekanlara mı gidiyorsunuz? Çevrenizde bulunan diğer mekanları deneyibilirsiniz.' },
        { name: 'Şehir içi', content: 'Yaşadığınız şehri gezdiniz mi? başka bir ilçe veya semti dolaşmaya başlayabilirsiniz.' },
        { name: 'Şehir Dışı', content: 'Hadi ama üşengeçliği bırakın ve yeni şehirlere yeni yüzlere açık olun. Diğer şehirlere ulaşım için Otobüs, Blabla uygulaması veya otostop seçeneklerini deneyebilirsiniz.' },
        { name: 'Doğa', content: 'Bulunduğunuz şehrin doğal güzelliklerini biliyor musunuz? Bilmiyorsanız internet elinizin altında girin güzellikleri bulun. Ve üşenmeden gezmeye başlayın.' },
        { name: 'Tarih', content: 'Şehrinizde ki Tarihi mekanları ziyarete gittiniz mi? Bizce gitmelisiniz, ve sizden önce orada kimler gelip geçmiş, kimler sizinle aynı topraklara basmış öğrenebilirsiniz.' },
        { name: 'Kefşet', content: 'Şehir içi veya şehir dışında doğal güzellikler veya gitmediğiniz bir kafe hiç denemediğiniz bir yer tabiki bilmiyorsunuz ancak internetten rahatlıkla öğrenibilir ve yola koyulabilirsiniz.' },
    ]
    const OneriGezinti = [
        {name:'Cafe', content:'Hadi ama hergün aynı cafede mi oturuyorsunuz? birazdaha ileride yeni cafe açıldı. Birazda orda takılın.'},
        {name:'Oyun Salonu', content:'Ne zamandır oynamadığın oyun salonundaki oyun nedir hadi biraz hasret giderin.'},
        {name:'Mahallede Volta', content:'Otur otur nereye kadar biraz yürümek iyi gelecektir. Temiz hava ve gürültüden uzak mahallede biraz volta atma zamanı.'},
        {name:'Kola Çekirdek', content:'Nasıl keyifliydi ama o zaman sohbet. Kolanı ve çekirdeğini al mahalle veya caddende bir köşe kap.'},
        {name:'Sen Daha İyi Biliyorsun', content:'Şehrin girmediğin bir mahallesi kaldımı.'},
        {name:'Üşenmekten Vazgeç', content:'Hadiiiiiiiii'},
    ]
    const OneriFilm = [
        {name:'Psikolojik En iyi 5', content:' 1. 12 Angry Man\n 2. 28Days\n 3. The Blind Side\n 4. Memento\n 5. Ordinary People'},
        {name:'Duygusal  En iyi 5', content:' 1. Amour \n 2. Still Alice\n 3. Dancer in the Dark\n 4. Theory of Everything\n 5. Boy in the Striped Pajamas'},
        {name:'Bilim Kurgu  En iyi 5', content:' 1. Inception\n 2. The Prestige\n 3. Eternal Sunshine of the Spotless Mind\n 4. Interstellar\n 5. The Butterfly Effect'},
        {name:'Korku  En iyi 5', content:' 1. Psycho \n 2. The Shining\n 3. Rear Window\n 4. Vertigo\n 5. The Sixth\n Bonus: Insidious Serisi'},
        {name:'Belgesel  En iyi 5', content:' 1. Frozen Planet\n 2. Crumb\n 3. Cosmos: A Spacetime Odyssey\n 4.  Our Planet\n 5. Hoop Dreams'},
        {name:'Dram En iyi 5', content:'1. The Shawshank Redemption\n 2. Fight Club\n 3. The Green Mile\n 4. The Prestige\n 5. Forrest Gump'},
    ]
    const OneriOyun = [
        { name: 'Kutu Oyunu ', content: 'Bir, kutu oyununa sahip misiniz(Monopoly, JungleSpin vs.)? Eğer öyle ise uygun gördüğünüz bir yerde keyifle oynamaya başlayabilirsiniz.(ev, oyun salonu vs.)' },
        { name: 'Mobil Oyun', content: 'Bir, grup mobil oyununa sahip misiniz(pubstory, tabu vs.)? Eğer öyle ise uygun gördüğünüz bir yerde keyifle oynamaya başlayabilirsiniz.(ev, cafe, park, çimenlik vs.) ' },
        { name: 'Sözel Oyun', content: 'Bir, sözlü oyun biliyor musunuz?(Vampir-Köylü, Ben kimim?)? Eğer öyle ise uygun gördüğünüz bir yerde keyifle oynamaya başlayabilirsiniz.(ev, cafe, park vs.)' },
        { name: 'Bilgisayar Oyunu ', content: 'Ekipte herkeste bilgisayar var ise sahip olduğunuz veya bedava sahip olabileceğiniz güncel, zevkli oyunlardan birini seçip, yok ise en yakın internet kafeye giderek. Şakalarınızla birlikle oyunun keyfini çıkartabilirsiniz.' },
        { name: 'Plastation Oyunu ', content: 'Plastation oyunları hakim olmasanızda yeni öğrenmek keyifli olabilir. sahip iseniz evinizde, değil iseniz size en yakın internet kafeye giderek bildiğiniz veya bilmediğiniz oyunların keyfini çıkartabilirsiniz.' },
        { name: 'Lunapark Oyunu ', content: 'Yakınlarınızda bir avm veya lunapark var ise oyun makinelerinin veya atış oyunlarının keyfini çıkartmaya gidebilirsiniz.' },
    ]

    return (
        <SafeAreaView style={styleOneriFri.container}>
            <Provider>
                <View style={styleOneriFri.btnView}>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriGezinti) }}
                        style={styleOneriFri.btn}>
                        <Text>Gezinti</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriFilm) }}
                        style={styleOneriFri.btn}>
                        <Text>Film</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriSehirTuru) }}
                        style={styleOneriFri.btn}>
                        <Text>SehirTuru</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriSohbet) }}
                        style={styleOneriFri.btn}>
                        <Text>Sohbet</Text> </Button>
                    <Button mode='contained' onPress={() => { showDialog(), setChecked(OneriOyun) }}
                        style={styleOneriFri.btn}>
                        <Text>Oyun</Text> </Button>
                    <Text style={styleOneriFri.txt}> Uygulama Gelişim Aşamasındadır.
                        Bir Çok Yeni Gelişmelerle Güncellenecektir.</Text>
                </View>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}
                        style={styleOneriFri.dialog}>
                        <ScrollView>
                            <Dialog.Title>{checked[keyIndex].name}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{checked[keyIndex].content}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions style={styleOneriFri.dialogActions}>
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

const styleOneriFri = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffefd5'
    },
    txt: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold'
    },
    btnView: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#f5deb3',
        margin: 10,
    },
    dialog: {
        backgroundColor: '#ffefd5'
    },
    dialogActions: {
        justifyContent: 'space-between'
    }

})
