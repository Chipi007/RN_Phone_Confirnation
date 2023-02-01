import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Svg from '../../Svg/Svg';
import {backArrow} from '../../../stubs/path';
import Title from '../../Title/Title';
import InputContainer from '../../InputContainer/InputContainer';
import Comment from '../../Comment/Comment';
import ErrorText from '../../ErrorText/ErrorText';

const PinInput = ({navigation}) => {
  const [codeValid, setCodeValid] = useState(true);
  return (
    <View style={styles.content}>
      <Svg xml={backArrow} width="24" height="24" />
      <Title>
        Введите код, который мы отправили на номер{'\n'}+7 (903) 119 38 28
      </Title>
      <InputContainer
        codeValid={codeValid}
        setCodeValid={setCodeValid}
        navigation={navigation}
      />
      {!codeValid && <ErrorText>Неверный код</ErrorText>}
      <Comment />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
});

export default PinInput;
