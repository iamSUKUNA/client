import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

const InputBox = ({
  title,
  secureText,
  placeholder,
  keyboardType,
  autoComplete,
  value,
  setValue,
}) => {
  return (
    <KeyboardAvoidingView>
      <View>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={secureText}
          placeholder={placeholder}
          autoCorrect={false}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    color: '#af9f85',
  },
  inputTitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
});
export default InputBox;
