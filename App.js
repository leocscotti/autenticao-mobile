import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './src/services/firebaseConfig.tsx';
 
export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const login = () =>{
      createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      
      const user = userCredential.user;

      console.log(user)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage)
      
    });
  }

  const esqueceuSenha= (email) => {
    

  }
 
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu email'
        value={email}
        onChangeText={(value)=> setEmail(value)}
      />
      <TextInput
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={(value)=> setSenha(value)}
      />
      <TouchableOpacity onPress={login}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});