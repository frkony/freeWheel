import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {
  Button,
  Text
} from 'react-native-paper';
import PossibilityMenu from '../reused/PossibilityMenu';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Friend({route, navigation}) {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PossibilityMenu />
        <Button
          onPress={() => navigation.navigate('OneriFri')}
          style={styles.btn}>
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
    alignItems: 'center',
    backgroundColor: '#ffefd5',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  btn: {
    width: width / 2,
    height: height / 20,
    backgroundColor: '#f5deb3',
    marginBottom: 80,
  },
  txt: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#000000',
  },
});
