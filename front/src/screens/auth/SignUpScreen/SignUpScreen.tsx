import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors} from '@constants/colors';
import {Input, MainButton} from '@components/index';
import {useSignUp} from './useSignUp';
import {ButtonVariant} from '@components/MainButton/MainButton';
import {styles} from './SignUpScreen.styles';
import {scale, verticalScale} from '@utils/scaleFunction';

export const SignUpScreen: React.FC = () => {
  const {
    errors,
    email,
    password,
    repeatPassword,
    setRepeatPassword,
    setEmail,
    setPassword,
    navigation,
    onSubmit,
    username,
    setUsername
  } = useSignUp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <Input
        value={email}
        onChange={setEmail}
        isError={!!errors.email}
        placeholder="Email"
      />
      {errors.email && (
        <View style={styles.helperContainer}>
          <Text style={styles.helperText}>{errors.email}</Text>
        </View>
      )}
      <Input
        value={username}
        onChange={setUsername}
        placeholder="Введіть імʼя користувача"
      />
      <Input
        value={password}
        isError={!!errors.password}
        onChange={setPassword}
        placeholder="Пароль"
        isPassword
      />
      {errors.password && (
        <View style={styles.helperContainer}>
          <Text style={styles.helperText}>{errors.password}</Text>
        </View>
      )}
      <Input
        value={repeatPassword}
        onChange={setRepeatPassword}
        isError={!!errors.repeatPassword}
        placeholder="Повторіть пароль"
        isPassword
      />
      {errors.repeatPassword && (
        <View style={styles.helperContainer}>
          <Text style={styles.helperText}>{errors.repeatPassword}</Text>
        </View>
      )}
      <MainButton
        title="Зареєструватись"
        disabled={!password || !email || !repeatPassword || !username}
        onPress={onSubmit}
        variant={ButtonVariant.Primary}
      />
      <View style={styles.bottomText}>
        <Text style={styles.bottomTextText}>Маєте аккаунт?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.highlightedTextBottom}>Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
