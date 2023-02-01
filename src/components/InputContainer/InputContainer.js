/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import InputItem from './InputItem/InputItem';
import {initialValues} from '../../stubs/initialValues';

let newInputIndex = 0;
const inputValues = Object.values(initialValues);
const pattern = '9127';

const InputContainer = ({codeValid, setCodeValid, navigation}) => {
  const [digits, setDigits] = useState(initialValues);

  const inputRef = useRef();

  const [nextInputIndex, setNextInputIndex] = useState(0);

  const isInputValid = obj => {
    return Object.values(obj).every(val => val.trim());
  };

  const onChange = (text, index) => {
    setCodeValid(true);
    const newDigits = {...digits};
    newDigits[index] = text;
    setDigits(newDigits);

    const lastIndex = inputValues.length - 1;
    if (!text) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastIndex ? lastIndex : index + 1;
    }
    setNextInputIndex(newInputIndex);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [nextInputIndex]);

  useEffect(() => {
    let val = '';
    if (isInputValid(digits)) {
      Object.values(digits).forEach(v => {
        val += v;
      });
      val === pattern
        ? (navigation.navigate('AfterAuth'), Keyboard.dismiss())
        : (setCodeValid(false), setDigits(initialValues));
    }
  }, [isInputValid, digits]);

  return (
    <View style={styles.content}>
      {Object.values(initialValues).map((item, index) => (
        <InputItem
          key={index}
          value={digits[index]}
          onChange={text => onChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          inputRef={nextInputIndex === index ? inputRef : null}
          codeValid={codeValid}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default InputContainer;
