import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { verticalScale } from "../../utils/scaleFunction";

export const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: colors.gray,
      height: verticalScale(56),
      borderRadius: 32,
      alignItems: 'center',
      paddingHorizontal: 20,
      flexDirection: 'row',
      width: '100%',
      marginTop: 26,
    },
    input: {
      ...typography.reqular,
      width: '100%',
    },
    inputTextFocused: {
      ...typography.semiBold,
      fontSize: 14,
      lineHeight: 20,
    },
    inputWrapper: {
      paddingLeft: 12,
      width: '80%',
    },
    label: {
      ...typography.label,
    },
    eyeButton: {
      marginLeft: 'auto',
    },
    error: {
      borderWidth: 1,
      borderColor: colors.red,
      backgroundColor: colors.background,
    },
  });
  