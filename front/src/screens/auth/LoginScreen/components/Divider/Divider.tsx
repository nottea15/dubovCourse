import React from 'react';
import {Text, View} from 'react-native';
import { styles } from './Divider.styles';

export const Divider = ({text}: {text: string}) => {
  return (
    <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

