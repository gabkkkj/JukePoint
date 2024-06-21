
import { View, Text, StyleSheet, Image} from 'react-native'
import Divider from '../components/Divider.js'
import { TextInput, Button } from 'react-native-paper';
import React from 'react';

export default function LoginScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
        <Image source={require('../assets/img/Logo-Laranja.png')} />
        <Divider/>
        <Text style={estilos.text}>Entrar no JukePoint</Text>
        <Divider/>
        <Text style={estilos.textInputs}>E-mail ou nome de usuário</Text>
        <TextInput style={estilos.Input}>E-mail ou nome de usuário</TextInput>
        <Divider/>
        <Text style={estilos.textInputs}>Senha</Text>
        <TextInput style={estilos.Input}>Senha</TextInput>
        <Divider/>
        <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" onPress={() => console.log('Pressed')}>
          Entrar
        </Button>
        <Text style={estilos.textInputs}>Esqueceu sua senha?</Text>
        <Divider/>
        <Text style={estilos.textInputs}>Não tem uma conta? Inscreva-se no JukePoint</Text>
      </View>
    );
  }

  const estilos = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 30,
    },
    textInputs: {
      color: 'white',
      fontSize: 10,
    },
    Input: {
      borderColor: 'white',
      border: 1,
      borderWidth: 3,
      borderRadius: 4,
      backgroundColor: '#666',
      width: 300
    },
    btn: {
      backgroundColor: '#ffa439',
      width: 240,
      padding: 30,
      textAlign: 'center'
    },
    btnText: {
      fontSize: 21,
      textAlign: 'center',
    }
  })