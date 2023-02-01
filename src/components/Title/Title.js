import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontFamily: 'Inter-Medium',
    fontSize: 24,
    lineHeight: 34,
    color: '#000',
  },
});

export default Title;
