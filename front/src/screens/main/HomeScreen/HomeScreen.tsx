import { MainButton } from '@components/MainButton'
import { AuthContext } from '@utils/AuthContext';
import React, { useContext } from 'react'
import { Text, View } from 'react-native'

export const HomeScreen = () => {

  const {signOut} = useContext(AuthContext);

  return (
    <View>
        <MainButton onPress={signOut ? signOut : () => console.log('error')} title='вийти' />
    </View>
  )
}
