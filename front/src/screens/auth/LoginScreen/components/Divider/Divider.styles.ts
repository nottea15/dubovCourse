import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    divider: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      marginVertical: 24,
    },
    line: {
      height: 1,
      flex: 1,
      backgroundColor: colors.line,
    },
    text: {
      ...typography.semiBold,
      color: colors.darkGray,
      paddingHorizontal: 16,
    },
  });
  