import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../components/Forms/inputBox';
import SubmitButton from '../components/Forms/SubmitButton';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({ navigation }) => {
  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // SUBMIT BUTTON FUNCTION
  const handleSubmitFunction = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert('Please enter all field.');
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log('Login Data => ', { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
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
