import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
} from 'react-native';
import { styles } from './MainButton.styles';

interface IButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  variant: ButtonVariant;
  title: string;
  isLoading?: boolean;
  size?: {width: number; height: number};
}

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'Secondary',
}

export const MainButton: React.FC<IButtonProps> = ({
  onPress,
  disabled,
  variant,
  title,
  isLoading,
  size,
}) => {
  console.log(isLoading);
  return (
    <View style={styles.buttonWrap}>
      <Pressable
        onPress={onPress}
        disabled={disabled || isLoading}
        style={({pressed}) =>
          variant === ButtonVariant.Secondary
            ? [
                styles.button,
                styles.secondaryButton,
                pressed && styles.secondaryPressed,
                disabled && styles.disabled,
                size && {height: size.height, width: size.width, paddingVertical: 0}
              ]
            : [
                styles.button,
                pressed && styles.mainPressed,
                disabled && styles.disabled,
                size && {height: size.height, width: size.width,  paddingVertical: 0, paddingHorizontal: 0}
              ]
        }>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={size ? [styles.buttonText, styles.small] : styles.buttonText}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
};
