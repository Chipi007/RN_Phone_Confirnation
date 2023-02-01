import React, {Children, useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const ErrorText = ({children, style}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 23,
    color: '#000',
    marginBottom: 16,
  },
});

export default ErrorText;
