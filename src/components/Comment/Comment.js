import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getPadTime} from '../../utils/utils';

const Comment = () => {
  const [time, setTime] = useState(59);
  const [isCounting, setIsCounting] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime(() => (time >= 1 ? time - 1 : 0));
    }, 1000);
    time === 0 ? setIsCounting(false) : '';
    return () => {
      clearInterval(interval);
    };
  }, [time, isCounting]);

  const resendCode = () => {
    setTime(59);
    setIsCounting(true);
  };
  return (
    <View style={styles.content}>
      {isCounting ? (
        <Text style={styles.comment}>
          Повторная отправка кода будет доступна через
          <Text style={styles.time}> 00:{getPadTime(time)} </Text>сек
        </Text>
      ) : (
        <Text style={styles.time} onPress={resendCode}>
          Отправить код повторно
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 23,
    color: '#8B8B8B',
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 23,
    color: '#000',
  },
});

export default Comment;
