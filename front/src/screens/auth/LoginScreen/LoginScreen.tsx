import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MainButton, Input} from '@components/index';
import {useNavigation} from '@react-navigation/native';
import {ButtonVariant} from '@components/MainButton/MainButton';
import {styles} from './LoginScreen.styles';
import {AuthContext} from '@utils/AuthContext';
import {validateEmail} from '@utils/validate';
import auth from '@utils/auth';

interface UserData {
  email: string;
  password: string;
}

interface Details {
  name?: string;
  suburb: string;
  state: string;
}

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({email: '', password: ''});

  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    //assuming you have a form for user to input their data
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await auth.signIn(userData);
      response && signIn && signIn(response.authentication.sessionToken);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      setErrors(prev => ({...prev, email: 'Email is not valid!'}));
      return;
    }
    setErrors({email: '', password: ''});
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
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
        value={password}
        onChange={setPassword}
        isError={!!errors.password}
        placeholder="Пароль"
        isPassword
      />
      {errors.password && (
        <View style={styles.helperContainer}>
          <Text style={styles.helperText}>{errors.password}</Text>
        </View>
      )}
      <MainButton
        title="Увійти"
        onPress={onSubmit}
        disabled={!password || !email}
        variant={ButtonVariant.Primary}
      />
      <View style={styles.bottomText}>
        <Text style={styles.bottomTextText}>Не маєте акаунту?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp' as never)}>
          <Text style={styles.highlightedTextBottom}>Зарєструватись</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
