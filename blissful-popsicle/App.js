import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isGasolina, setIsGasolina] = useState(0);
  const [isAlcool, setIsAcool] = useState(0);
  const [isGas, setIsGas] = useState();
  const [isGasosa, setIsGasosa] = useState('');

  function calcular() {
    if (isGasolina === 0 || isAlcool === 0) {
      alert('É obrigatório digitar os dois números');
      return;
    } else {
      if (isAlcool > 0 && isGasolina > 0) {
        let resultado = isAlcool / isGasolina;

        if (resultado >= 0.7) {
          setIsGas(true);
          setIsGasosa('Gasolina');
        } else if (resultado < 0.7) {
          setIsGas(false);
          setIsGasosa('Alcool');
        }
      }
    }
  }

  let retu;
  if (isGas == true) {
    retu = (
      <Image
        source={{
          uri: 'http://www.postobemvindo.com.br/images/site/gasolina-comum.jpg',
        }}
        style={{ width: 120, height: 140 }}
      />
    );
  } else if (isGas == false) {
    retu = (
      <Image
        source={{
          uri: 'https://unica.com.br/wp-content/uploads/2020/01/IMG_2040-scaled-e1624385269410.jpg',
        }}
        style={{ width: 140, height: 140 }}
      />
    );
  } else {
    retu = <Text>Digite os valores</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>Alcool ou Gasolina</Text>

      <View style={styles.boxView}>{retu}</View>

      <TextInput
        style={styles.input}
        placeholder="Preço do Alcool"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(numero) => setIsAcool(numero)}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(numero) => setIsGasolina(numero)}></TextInput>

      <Pressable style={styles.btn} onPress={calcular}>
        <Text>Verificar</Text>
      </Pressable>

      <Text style={{ marginTop: '5%', fontSize: 30 }}>{isGasosa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
});
