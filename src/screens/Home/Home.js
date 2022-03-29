import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
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
    
    var changeLang=(lang)=>{
        i18n.changeLanguage(lang)
    }
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
          <TouchableOpacity onPress={()=> {changeLang('tr'),setVisible(false)}}>
            <Text >{t('TRTURKISH')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {changeLang('en'),setVisible(false)}}>
            <Text >{t('ENENGLISH')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  

  return (
    <SafeAreaView style={styleHome.container}>
      <TouchableOpacity
        onPress={() => changeStateMenu()}
        style={styleHome.translate}>
        <Text style={styleHome.txt}>{t('LANGUAGE')} </Text>
        <AntDesign
          name="down"
          size={15}
          color="black"
          style={{marginRight: 12}}
        />
      </TouchableOpacity>
      {visible && <Lmenu />}
      <View style={styleHome.content}>
        <ImageBackground
          source={require('../../img/logo.png')}
          resizeMode="cover"
          style={styleHome.logo}
        />
        <Text style={styleHome.txt}>{t('SELECTCATEGORY')}</Text>
        <Button
          mode="contained"
          style={styleHome.btn}
          onPress={() => navigation.navigate('Friend', {title: 'Friend'})}>
          <Text style={styleHome.txt}>{t('FRIEND')} </Text>
        </Button>
        <Button
          mode="contained"
          style={styleHome.btn}
          onPress={() => navigation.navigate('Darlings')}>
          <Text style={styleHome.txt}> {t('DARLING')} </Text>
        </Button>
        <Button
          mode="contained"
          style={styleHome.btn}
          onPress={() => navigation.navigate('ArtıOnSekiz')}>
          <Text style={styleHome.txt}>{t('SEXUALITY')}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffefd5',
  },
  content: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderWidth:1,borderColor:'red'
  },
  logo: {
    width: width,
    height: height / 2,
  },
  txt: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    color:'#000000'
  },
  btn: {
    backgroundColor: '#f5deb3',
    margin: 10,
  },
  translate: {
    width: width,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 30,
    marginTop: 30,
    //borderWidth: 1,
  },
});
