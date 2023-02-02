import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';

const Svg = ({xml, width, height, style}) => {
  return <SvgXml xml={xml} width={width} height={height} style={style} />;
};

const styles = StyleSheet.create({
  arrow: {
    marginBottom: 36,
  },
  previewImage: {
    marginBottom: 16,
  },
});

export default Svg;
