import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputItem = ({
  value,
  onChange,
  maxLength,
  keyboardType,
  inputRef,
  codeValid,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      keyboardType={keyboardType}
      maxLength={maxLength}
      style={[styles.input, codeValid ? '' : styles.inputInvalid]}
      ref={inputRef}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 49,
    height: 60,
    marginRight: 10,
    backgroundColor: '#F3F3F3',
    color: '#000',
    fontSize: 26,
    borderRadius: 7,
    textAlign: 'center',
  },
  inputInvalid: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default InputItem;
