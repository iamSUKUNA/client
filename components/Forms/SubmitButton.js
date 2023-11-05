import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SubmitButton = ({ btnText, handleSubmitFunction, loading }) => {
  return (
    <TouchableOpacity
      style={styles.registerButton}
      onPress={handleSubmitFunction}
    >
      <Text style={styles.buttonText}>
        {loading ? 'Please wait....' : btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 80,
    marginHorizontal: 25,
    marginTop: 20,
    opacity: 0.8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default SubmitButton;
