import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView,StyleSheet, View, Dimensions, Image} from 'react-native';
import {Button, Text} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Suggestions({navigation}) {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../img/logo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('Movie')}>
          <Text style={styles.txt}>{t('MOVIE')}</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Food')}
          style={styles.btn}>
          <Text style={styles.txt}>{t('FOOD')}</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('Activity')}>
          <Text style={styles.txt}>{t('ACTIVITY')}</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('Sexuality')}>
          <Text style={styles.txt}>{t('SEXUALITY')}</Text>
        </Button>
      </View>
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
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  btn: {
    width: width / 1.5,
    justifyContent: 'center',
    backgroundColor: '#008080',
    marginTop: 20,
    shadowColor: 'black',
    shadowRadius: 16,
    elevation: 16,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logo: {
    width: width / 1.2,
    height: height / 2.4,
    borderRadius: 250,
    marginBottom: 10,
  },
});
