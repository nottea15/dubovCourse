import React, {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';

import Eye from '@assets/icons/eye.svg';
import EyeClosed from '@assets/icons/eyeClosed.svg';
import { styles } from './Input.styles';

interface IInputProps {
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  isPassword?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  isError?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  isPassword,
  icon,
  placeholder,
  isError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={
        isError ? [styles.inputContainer, styles.error] : styles.inputContainer
      }>
      {icon}
      <View style={styles.inputWrapper}>
        {(isFocused || value) && (
          <Text style={styles.label}>{placeholder}</Text>
        )}
        <TextInput
          autoCorrect={false}
          value={value}
          onChangeText={onChange}
          style={
            isFocused ? [styles.input, styles.inputTextFocused] : styles.input
          }
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? '' : placeholder}
          placeholderTextColor={colors.gray2}
          secureTextEntry={isPassword && !showPassword}
        />
      </View>
      {isPassword && (
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Eye color={colors.gray2} />
          ) : (
            <EyeClosed color={colors.gray2} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};