import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  userToken: string | null;
  isLoading: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem('accessToken');

      setIsLoading(false);
      setUserToken(token);
    };

    bootstrapAsync();
  }, []);

  const authContext = {
    isLoading,
    userToken,
    signIn: async (token: string) => {
      AsyncStorage.setItem('accessToken', token);
      setUserToken(token);
    },
    signOut: async () => {
      AsyncStorage.removeItem('accessToken');
      setUserToken(null);
    },
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
