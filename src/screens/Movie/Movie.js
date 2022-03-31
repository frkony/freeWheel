import {t} from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {Button, Text} from 'react-native-paper';
import PossibilityMenu from '../reused/PossibilityMenu';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const filmData=[
  {id:1,name:'Zindan Adası'},
  {id:2,name:'Zindan Adası'},
  {id:3,name:'Zindan Adası'},
  {id:4,name:'Zindan Adası'},
  {id:5,name:'Zindan Adası'},
  {id:6,name:'Zindan Adası'},
]

export default function Movie({navigation}) {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PossibilityMenu />
        <Button mode="contained" style={styles.btn} onPress={() => navigation.navigate('MovieSug')}>
          <Text style={styles.txt}>{t('SUGGESTIONS')}</Text>
        </Button>
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
    flex: 1,
    marginTop: 50,
    justifyContent:'center',
    alignItems:'center',
  },
  btn: {
    width:width/2,
    justifyContent:'center',
    marginBottom:50,
    backgroundColor: '#008080',
    shadowColor:'black',
    shadowRadius:16,
    elevation:16,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fffafa',
  },
});
