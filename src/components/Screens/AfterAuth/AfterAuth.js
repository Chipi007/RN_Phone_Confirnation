import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg from '../../Svg/Svg';
import {previewImage} from '../../../stubs/path';

const AfterAuth = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#310624', '#FFCEC4']}
      start={{x: 0.7, y: 0.15}}
      end={{x: 0.4, y: 0.9}}
      style={styles.container}>
      <View style={styles.container}>
        <Svg xml={previewImage} width={81} height={81} style={styles.image} />
        <Text style={styles.title}>Клиника Фомина {'\n'}Беременность</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#fff',
  },
  image: {
    marginBottom: 16,
  },
});

export default AfterAuth;
