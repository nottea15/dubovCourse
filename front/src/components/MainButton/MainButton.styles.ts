import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { verticalScale } from "@utils/scaleFunction";

export const styles = StyleSheet.create({
    buttonWrap: {
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      borderRadius: 32,
      backgroundColor: colors.main,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: verticalScale(16),
    },
    buttonText: {
      ...typography.bold,
      color: colors.black,
    },
    mainPressed: {
      backgroundColor: colors.active,
    },
    secondaryButton: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: '#000000',
    },
    secondaryPressed: {
      backgroundColor: colors.line,
      borderColor: colors.black,
    },
    disabled: {
      opacity: 0.3,
    },
    small: {
      ...typography.semiBold,
      fontSize: 12,
      lineHeight: 18
    }
  });
  