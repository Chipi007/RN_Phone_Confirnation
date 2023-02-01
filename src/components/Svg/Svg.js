import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';

const SvgArrow = ({xml, width, height}) => {
  return (
    <SvgXml xml={xml} width={width} height={height} style={styles.arrow} />
  );
};

const styles = StyleSheet.create({
  arrow: {
    marginBottom: 36,
  },
});

export default SvgArrow;
