import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {Button, Text} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SexualitySug() {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}></Text>
        </Button>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}></Text>
        </Button>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}></Text>
        </Button>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}></Text>
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
    flex:1,
    width:width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: width / 2,
    justifyContent: 'center',
    marginBottom: 50,
    backgroundColor: '#008080',
    shadowColor: 'black',
    shadowRadius: 16,
    elevation: 16,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fffafa',
  },
});
