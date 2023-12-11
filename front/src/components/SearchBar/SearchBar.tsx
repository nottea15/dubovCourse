import React, {Dispatch, SetStateAction, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import Search from '@assets/icons/search.svg';
import { styles } from './SearchBar.styles';

interface IProps {
  value: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

export const SearchBar: React.FC<IProps> = ({value, onChange}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={isFocused ? [styles.container, styles.focused] : styles.container}>
      <Search color={isFocused ? colors.main : colors.gray2} width={24} height={24}/>
      <TextInput
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={value ? [styles.input, styles.inputText] : styles.input}
        placeholder="Пошук"
      />
    </View>
  );
};

