import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../components/Forms/inputBox';
import SubmitButton from '../components/Forms/SubmitButton';
const Register = () => {
  // STATES
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // SUBMIT BUTTON FUNCTION
  const handleSubmitFunction = () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert('Please enter all field.');
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log('Registered Data => ', { name, email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.contaier}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          title={'Name'}
          placeholder={'Enter your Name'}
          value={name}
          setValue={setName}
        />
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
        btnText={'Register'}
        loading={loading}
        handleSubmitFunction={handleSubmitFunction}
      />
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
});
export default Register;
