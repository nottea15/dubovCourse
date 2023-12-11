import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { validateEmail } from '@utils/validate';
import auth from '@utils/auth';

export const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const navigation = useNavigation();

  const onSubmit = async () => {
    if (!validateEmail(email)) {
      setErrors(prev => ({...prev, email: 'Email is not valid!'}));
      return;
    }
    if (password !== repeatPassword) {
      setErrors({
        email: '',
        password: '',
        repeatPassword: 'Passwords must match',
      });
      return;
    }
    if(!username) {
      return
    }

    const userData = {
      email: email,
      password: password,
      username: username
    };
    try {
      const response = await auth.signUp(userData);
      response && navigation.navigate("Login" as never)
    } catch (error) {
      console.log(error);
    }
    setErrors(prev => ({...prev, email: ''}));
  };


  return {
    errors,
    email,
    password,
    repeatPassword,
    navigation,
    setRepeatPassword,
    setEmail,
    setPassword,
    setErrors,
    onSubmit,
    username,
    setUsername
  };
};
