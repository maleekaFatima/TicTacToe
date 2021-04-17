import React, { useState, useEffect, Console } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  Modal,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [turn, setTurn] = useState(0);
  const [viewModal, setViewModal] = useState(false);
  const [modalText, setModalText] = useState('hello');
  const [toPrint, setToPrint] = useState('O');
  const [button1, setButton1] = useState('a');
  const [button2, setButton2] = useState('b');
  const [button3, setButton3] = useState('c');
  const [button4, setButton4] = useState('d');
  const [button5, setButton5] = useState('e');
  const [button6, setButton6] = useState('f');
  const [button7, setButton7] = useState('g');
  const [button8, setButton8] = useState('h');
  const [button9, setButton9] = useState('i');

  const newGame = () => {
    setTurn(0);
    setToPrint('O');
    setModalText('hello');
    setButton1('a');
    setButton2('b');
    setButton3('c');
    setButton4('d');
    setButton5('e');
    setButton6('f');
    setButton7('g');
    setButton8('h');
    setButton9('i');
    setViewModal(false);
  };
  const showModel = (text) => {
    setModalText(text);
    setViewModal(true);
  };
  const changeTurn = () => {
    if (toPrint == 'O') {
      setToPrint('X');
    } else if (toPrint == 'X') {
      setToPrint('O');
    }
  };

  const winner = () => {
    if (
      (button1 == 'X' && button2 == 'X' && button3 == 'X') ||
      (button4 == 'X' && button5 == 'X' && button6 == 'X') ||
      (button7 == 'X' && button8 == 'X' && button9 == 'X') ||
      (button1 == 'X' && button4 == 'X' && button7 == 'X') ||
      (button2 == 'X' && button5 == 'X' && button8 == 'X') ||
      (button3 == 'X' && button6 == 'X' && button9 == 'X') ||
      (button1 == 'X' && button5 == 'X' && button9 == 'X') ||
      (button3 == 'X' && button5 == 'X' && button7 == 'X')
    ) {
      showModel('PLAYER 2 WON');
    } else if (
      (button1 == 'O' && button2 == 'O' && button3 == 'O') ||
      (button4 == 'O' && button5 == 'O' && button6 == 'O') ||
      (button7 == 'O' && button8 == 'O' && button9 == 'O') ||
      (button1 == 'O' && button4 == 'O' && button7 == 'O') ||
      (button2 == 'O' && button5 == 'O' && button8 == 'O') ||
      (button3 == 'O' && button6 == 'O' && button9 == 'O') ||
      (button1 == 'O' && button5 == 'O' && button9 == 'O') ||
      (button3 == 'O' && button5 == 'O' && button7 == 'O')
    ) {
      showModel('PLAYER 1 WON');
    } else if (
      (button1 == 'O' || button1 == 'X') &&
      (button2 == 'O' || button2 == 'X') &&
      (button3 == 'O' || button3 == 'X') &&
      (button4 == 'O' || button4 == 'X') &&
      (button5 == 'O' || button5 == 'X') &&
      (button6 == 'O' || button6 == 'X') &&
      (button7 == 'O' || button7 == 'X') &&
      (button8 == 'O' || button8 == 'X') &&
      (button9 == 'O' || button9 == 'X')
    ) {
      showModel('DRAW');
    }
  };
  const buttonPressed = (button) => {
    if (button == 'O' || button == 'X') {
      Alert.alert('cannot!!');
    } else {
      var currentSymbol = toPrint;
      printPressable(button, currentSymbol);

      setTurn(turn + 1);
      changeTurn();
    }
  };

  const printPressable = (button, currentSymbol) => {
    switch (button) {
      case button1:
        setButton1(currentSymbol);
        break;
      case button2:
        setButton2(currentSymbol);
        break;
      case button3:
        setButton3(currentSymbol);
        break;
      case button4:
        setButton4(currentSymbol);
        break;
      case button5:
        setButton5(currentSymbol);
        break;
      case button6:
        setButton6(currentSymbol);
        break;
      case button7:
        setButton7(currentSymbol);
        break;
      case button8:
        setButton8(currentSymbol);
        break;
      case button9:
        setButton9(currentSymbol);
        break;
    }
  };

  useEffect(() => {
    if (!viewModal) {
      winner();
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.buttonGrid}>
        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button1)}>
              <Text style={styles.buttonText}>
                {button1 == 'a' ? ' ' : button1}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button2)}>
              <Text style={styles.buttonText}>
                {button2 == 'b' ? ' ' : button2}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button3)}>
              <Text style={styles.buttonText}>
                {button3 == 'c' ? ' ' : button3}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button4)}>
              <Text style={styles.buttonText}>
                {button4 == 'd' ? ' ' : button4}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button5)}>
              <Text style={styles.buttonText}>
                {button5 == 'e' ? ' ' : button5}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button6)}>
              <Text style={styles.buttonText}>
                {button6 == 'f' ? ' ' : button6}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button7)}>
              <Text style={styles.buttonText}>
                {button7 == 'g' ? ' ' : button7}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button8)}>
              <Text style={styles.buttonText}>
                {button8 == 'h' ? ' ' : button8}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonCover}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'white' : 'orange',
                },
                styles.button,
              ]}
              onPress={() => buttonPressed(button9)}>
              <Text style={styles.buttonText}>
                {button9 == 'i' ? ' ' : button9}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={viewModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setViewModal(!viewModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalText}</Text>
            <Pressable
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={newGame}>
              <Text style={styles.textStyle}>newGame</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,
  },
  textcenter: {
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
