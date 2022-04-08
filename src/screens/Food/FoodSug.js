import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  Text,
} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function FoodSug() {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <Provider>
      <View style={styles.content}>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => {
            showDialog();
          }}>
          <Text style={styles.txt}>Ev</Text>
        </Button>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}>Sokak</Text>
        </Button>
        <Button mode="contained" style={styles.btn} onPress={() => {}}>
          <Text style={styles.txt}>Ülke Mutfağı</Text>
        </Button>
        <Button
          mode="contained"
          style={styles.btn}
          onPress={() => {
            showDialog();
            console.log('basıldı');
          }}>
          <Text style={styles.txt}>Fast Food</Text>
        </Button>
        
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>
                <Text>Test</Text>
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>Test Test</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>
                  <Text>OK</Text>
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        
      </View>
      </Provider>
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
    width: width,
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
