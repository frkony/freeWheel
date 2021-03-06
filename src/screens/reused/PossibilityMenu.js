import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
  ToastAndroid,
} from 'react-native';
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Provider,
  Portal,
  Text,
} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function PossibilityMenu({
  ActivityData,
  FoodData,
  MovieData,
  SexualityData,
}) {
  //console.log('PossibilityMenu Başladı.');
  useEffect(() => {
    //console.log('useEffect Başladı');
    generateNum();
    suggestionsSet();
  }, [randomDeg]);

  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const [randomDeg, setRandomDeg] = useState(0);
  const [sonuc, setSonuc] = useState('');
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const ActivityD = ActivityData;
  const FoodD = FoodData;
  const MovieD = MovieData;
  const SexualityD = SexualityData;

  const generateNum = () => {
    var number = Math.floor(Math.random() * 360) + 2880;
    setRandomDeg(number);
    //console.log('Random Deg Setlendi, Random Number:', number-2880);
  };
  //console.log('Random Deg:', randomDeg-2880);

  var rotateValue = new Animated.Value(0);
  const rotateSpin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', randomDeg + 'deg'],
  });

  const startImageSpin = () => {
    //console.log('Start Image Spin Başladı')
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(({finished}) => {
      //console.log('Finished Değeri :',finished)
      //console.log('Spin Sonlandı Random Deg', randomDeg - 2880);
      if (finished == false) {
        ToastAndroid.show('Oynama Uygulamayla', ToastAndroid.SHORT);
      } else if (0 < randomDeg - 2880 && randomDeg - 2880 < 60) {
        //ToastAndroid.show('0-60', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility1);
      } else if (60 < randomDeg - 2880 && randomDeg - 2880 < 120) {
        //ToastAndroid.show('60-120', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility2);
      } else if (120 < randomDeg - 2880 && randomDeg - 2880 < 180) {
        //ToastAndroid.show('120-180', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility3);
      } else if (180 < randomDeg - 2880 && randomDeg - 2880 < 240) {
        //ToastAndroid.show('180-240', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility4);
      } else if (240 < randomDeg - 2880 && randomDeg - 2880 < 300) {
        //ToastAndroid.show('240-300', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility5);
      } else if (300 < randomDeg - 2880 && randomDeg - 2880 < 360) {
        //ToastAndroid.show('300-360', ToastAndroid.SHORT)
        showDialog();
        setSonuc(possibility6);
      } else {
        ToastAndroid.show(t('UNLUCKY'), ToastAndroid.SHORT);
      }
      generateNum();
    });
  };

  const [possibility1, setPossibility1] = useState('');
  const [possibility2, setPossibility2] = useState('');
  const [possibility3, setPossibility3] = useState('');
  const [possibility4, setPossibility4] = useState('');
  const [possibility5, setPossibility5] = useState('');
  const [possibility6, setPossibility6] = useState('');

  function suggestionsSet() {
    if (ActivityD) {
      setPossibility1(ActivityD[0].name);
      setPossibility2(ActivityD[1].name);
      setPossibility3(ActivityD[2].name);
      setPossibility4(ActivityD[3].name);
      setPossibility5(ActivityD[4].name);
      setPossibility6(ActivityD[5].name);
    } else if (FoodD) {
      setPossibility1(FoodD[0].name);
      setPossibility2(FoodD[1].name);
      setPossibility3(FoodD[2].name);
      setPossibility4(FoodD[3].name);
      setPossibility5(FoodD[4].name);
      setPossibility6(FoodD[5].name);
    } else if (MovieD) {
      setPossibility1(MovieD[0].name);
      setPossibility2(MovieD[1].name);
      setPossibility3(MovieD[2].name);
      setPossibility4(MovieD[3].name);
      setPossibility5(MovieD[4].name);
      setPossibility6(MovieD[5].name);
    } else if (SexualityD) {
      setPossibility1(SexualityD[0].name);
      setPossibility2(SexualityD[1].name);
      setPossibility3(SexualityD[2].name);
      setPossibility4(SexualityD[3].name);
      setPossibility5(SexualityD[4].name);
      setPossibility6(SexualityD[5].name);
    } else {
      ToastAndroid.show('Öneri Yok', ToastAndroid.SHORT);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        <View style={styles.txtInputView}>
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#ff0000'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={txt => setPossibility1(txt)}
            placeholder={t('ENTERANOPTION')}
            value={possibility1}
            maxLength={15}
          />
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#ff8c00'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={setPossibility2}
            placeholder={t('ENTERANOPTION')}
            value={possibility2}
            maxLength={15}
          />
        </View>
        <View style={styles.txtInputView}>
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#ffff00'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={setPossibility3}
            placeholder={t('ENTERANOPTION')}
            value={possibility3}
            maxLength={15}
          />
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#00ff00'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={setPossibility4}
            placeholder={t('ENTERANOPTION')}
            value={possibility4}
            maxLength={15}
          />
        </View>
        <View style={styles.txtInputView}>
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#00bfff'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={setPossibility5}
            placeholder={t('ENTERANOPTION')}
            value={possibility5}
            maxLength={15}
          />
          <TextInput
            style={[styles.txtInput, {backgroundColor: '#800080'}]}
            mode="outlined"
            label={t('ONEOFTHEOPTIONS')}
            onChangeText={setPossibility6}
            placeholder={t('ENTERANOPTION')}
            value={possibility6}
            maxLength={15}
          />
        </View>
        <View style={styles.content}>
          <Image
            style={styles.wheelDecisionTriangle}
            source={require('../../img/kararUcgeni.png')}
          />
          <Animated.Image
            style={[styles.wheelView, {transform: [{rotate: rotateSpin}]}]}
            source={require('../../img/wheel.png')}
            resizeMode={'cover'}
          />
          <Button
            onPress={() => {
              startImageSpin();
            }}
            mode="contained"
            style={styles.btn}>
            <Text style={styles.txt}>{t('DECIDE')}</Text>
          </Button>
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title> {t('YOUHADYOURSHOT')}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                {t('RESULT')} : {sonuc}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                mode="contained"
                style={styles.btn.dialogBtn}
                onPress={hideDialog}>
                <Text style={styles.txt.dialogTxt}>{t('DONE')}</Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  txtInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    height: height / 13,
  },
  txtInput: {
    width: width / 2.1,
    marginLeft: 5,
    borderRadius: 25,
  },
  btn: {
    width: width / 1.5,
    backgroundColor: '#008080',
    marginTop: 25,
    marginBottom: 10,
    shadowColor: 'black',
    shadowRadius: 16,
    elevation: 16,
    dialogBtn: {
      width: width/4,
      backgroundColor: '#008080',
      shadowColor: 'black',
      shadowRadius: 16,
      elevation: 16,
    },
  },

  wheelView: {
    width: width,
    height: height / 2.3,
  },
  wheelDecisionTriangle: {
    width: 25,
    height: 25,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fffafa',
    dialogTxt: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fffafa',
    },
  },
});
