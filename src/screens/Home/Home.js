import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home({navigation}) {
  const [visible, setVisible] = useState(false);
  const changeStateMenu = () => {
    if (visible == false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const {t, i18n} = useTranslation();
  const Lmenu = () => {
    var changeLang = lang => {
      i18n.changeLanguage(lang);
    };
    return (
      <View
        style={{
          width: width,
          height: height / 18,
          alignItems: 'flex-end',
          paddingRight: 20,
          //borderWidth:1
        }}>
        <View
          style={{
            width: width / 4,
            height: height / 18,
            alignItems: 'flex-end',
            //borderWidth:1
          }}>
          <TouchableOpacity
            onPress={() => {
              changeLang('tr'), setVisible(false);
            }}>
            <Text>{t('TRTURKISH')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeLang('en'), setVisible(false);
            }}>
            <Text>{t('ENENGLISH')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => changeStateMenu()}
        style={styles.translate}>
        <Text style={{color: 'black'}}>{t('LANGUAGE')} </Text>
        <AntDesign
          name="down"
          size={15}
          color="black"
          style={{marginRight: 12}}
        />
      </TouchableOpacity>
      {visible && <Lmenu />}
      <View style={styles.content}>
        <Image
          source={require('../../img/logo.png')}
          resizeMode="cover"
          style={styles.logo}
        />
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('Wheeldestiny')}>
          <Text style={styles.txt}>{t('DRAWYOUROWNDESTINY')} </Text>
        </Button>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('Suggestions')}>
          <Text style={styles.txt}> {t('SUGGESTIONS')} </Text>
        </Button>
      </View>
      <View style={styles.eof}>
        <Image
          source={require('../../img/eof1.png')}
          style={styles.eof.ımg}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: width,
    height: height / 2,
    marginBottom:20
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fffafa',
    fontFamily: 'sans-serif',
  },
  btn: {
    justifyContent:'center',
    backgroundColor: '#008080',
    marginTop: 20,
    shadowColor:'black',
    shadowOpacity:1,
    shadowOffset:{width:0,height:10},
    shadowRadius:16,
    elevation:16,
  },
  translate: {
    width: width,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 30,
    marginTop: 30,
  },
  eof: {
    flex:1,
    width:width,
    justifyContent:'flex-end',
    alignItems:'center',
    ımg: {
      width: width / 3,
      height: height / 6,
    },
  },
});
