import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Provider,
  Portal,
  Text
} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function PossibilityMenu() {
  const {t} = useTranslation();

  const [possibility1, setPossibility1] = useState(t('SELECTIONNOTWRITTEN'));
  const [possibility2, setPossibility2] = useState(t('SELECTIONNOTWRITTEN'));
  const [possibility3, setPossibility3] = useState(t('SELECTIONNOTWRITTEN'));
  const [possibility4, setPossibility4] = useState(t('SELECTIONNOTWRITTEN'));
  const [possibility5, setPossibility5] = useState(t('SELECTIONNOTWRITTEN'));
  const [possibility6, setPossibility6] = useState(t('SELECTIONNOTWRITTEN'));

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  var number = Math.floor(Math.random() * 360) + 2880;
  const [randomDeg, setRandomDeg] = useState(
    Math.floor(Math.random() * 360) + 2880,
  );

  const [sonuc, setSonuc] = useState('');

  var rotateValue = new Animated.Value(0);
  const rotateSpin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', randomDeg + 'deg'],
  });
  const startImageSpin = () => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      console.log('Finished Random Deg', randomDeg - 2880);
      if (0 < randomDeg - 2880 && randomDeg - 2880 < 60) {
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
        ToastAndroid.show(
          t('Şanssızlık, Bir Karar Veremedin. Tekrar Dene'),
          ToastAndroid.SHORT,
        );
      }
      setRandomDeg(number);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtInputView}>
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#ff0000'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility1}
          placeholder="Bir ihtimal Giriniz."
          maxLength={15}
        />
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#228b22'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility2}
          placeholder="Bir ihtimal Giriniz."
          maxLength={15}
        />
      </View>
      <View style={styles.txtInputView}>
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#0000ff'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility3}
          placeholder="Bir ihtimal Giriniz."
          maxLength={15}
        />
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#ffd700'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility4}
          placeholder="Bir ihtimal Giriniz."
          maxLength={15}
        />
      </View>
      <View style={styles.txtInputView}>
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#4b0082'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility5}
          placeholder="Bir ihtimal Giriniz."
          maxLength={15}
        />
        <TextInput
          style={[styles.txtInput, {backgroundColor: '#2f4f4f'}]}
          mode="outlined"
          label={t('ONEOFTHEOPTIONS')}
          onChangeText={setPossibility6}
          placeholder="Bir ihtimal Giriniz."
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

        <Button onPress={() => startImageSpin()} style={styles.btn}>
         <Text style={styles.txt}>{t('DECIDE')}</Text>
        </Button>
      </View>
      <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title> {t('YOUHADYOURSHOT')}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{t('RESULT')} : {sonuc}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>{t('DONE')}</Button>
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
    backgroundColor: '#ffefd5',
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
  },
  btn: {
    width: width / 2,
    backgroundColor: '#f5deb3',
    marginTop: 5,
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
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    color:'#000000'
  },
});
