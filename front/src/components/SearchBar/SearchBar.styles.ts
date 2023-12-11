import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { scale, verticalScale } from "@utils/scaleFunction";

export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      borderRadius: 100,
      borderColor: colors.gray,
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(12),
      shadowColor: '#000000',
      alignItems: 'center',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.13,
      shadowRadius: 20,
      elevation: 5,
      backgroundColor: colors.background,
    },
    input: {
      flex: 1,
      paddingHorizontal: scale(12),
      ...typography.reqular,
    },
    filterButton: {
      padding: 8,
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#EEEEEE',
    },
    inputText: {
      ...typography.semiBold,
      fontSize: 14,
      lineHeight: 20,
      color: '#212121',
    },
    focused: {
      borderColor: colors.main,
      backgroundColor: '#A1E77714',
    },
  });
  