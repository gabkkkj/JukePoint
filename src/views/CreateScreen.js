
import { View, Text, StyleSheet, Image} from 'react-native'
import Divider from '../components/Divider.js'
import { TextInput, Button } from 'react-native-paper';
import React from 'react';

export default function LoginScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
        <Image source={require('../assets/img/Logo-Laranja.png')} />
        <Divider/>
        <Text style={estilos.text}>Se inscreva e comece a curtir</Text>
        <Divider/>
        <Text style={estilos.textInputs}>Endereço de E-mail</Text>
        <TextInput style={estilos.Input}>nome@dominio.com</TextInput>
        <Divider/>
        <Text style={estilos.textInputs}>Senha</Text>
        <TextInput style={estilos.Input}>Sua Senha</TextInput>
        <Text style={estilos.textInputs}>Sua senha deve conter: 10 caracteres, 1 letra e 1 numero o caractere especial</Text>
        <Divider/>
        <Text style={estilos.textInputs}>Nome (será o nome mostrado em seu perfil)</Text>
        <TextInput style={estilos.Input}>Nome de usuário</TextInput>
        <Divider/>
        <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" onPress={() => console.log('Pressed')}>
          Criar
        </Button>
        <Divider/>
        <Text style={estilos.textInputs}>Já tem uma conta? Faça login no JukePoint</Text>
      </View>
    );
  }

  const estilos = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 25,
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