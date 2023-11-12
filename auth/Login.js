import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../components/Forms/inputBox';
import SubmitButton from '../components/Forms/SubmitButton';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({ navigation }) => {
  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // SUBMIT BUTTON FUNCTION
  const handleSubmitFunction = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert('Please enter all field.');
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post(
        'http://172.20.10.3:8080/api/v1/auth/login',
        { email, password }
      );
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      alert(data && data.message);
      console.log('Login Data => ', { email, password });
    } catch (error) {
      alert(error.response.data.messgae);
      setLoading(false);
      console.log(error);
    }
  };

  // Temp function to check local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem('@auth');
    console.log('local storage ===>', data);
  };
  getLocalStorageData();
  return (
    <View style={styles.contaier}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          title={'Email'}
          placeholder={'Enter your Email'}
          keyboardType={'email-address'}
          autoComplete={'email'}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          title={'Password'}
          secureText={true}
          placeholder={'Enter your password'}
          autoComplete={'password'}
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnText={'Login'}
        loading={loading}
        handleSubmitFunction={handleSubmitFunction}
      />
      <Text style={styles.alreadyRegisterText1}>
        Don't have an account?
        <Text
          style={styles.alreadyRegisterText2}
          onPress={() => navigation.navigate('Register')}
        >
          {' '}
          Register
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1e2225',
    marginBottom: 20,
  },
  alreadyRegisterText1: {
    fontSize: 16,
    textAlign: 'center',
  },
  alreadyRegisterText2: {
    color: '#0349fc',
    fontWeight: '500',
  },
});

export default Login;
