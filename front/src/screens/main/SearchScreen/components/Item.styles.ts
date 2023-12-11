import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { verticalScale, moderateScale, scale } from "@utils/scaleFunction";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(12),
    marginHorizontal: 12,
    marginBottom: verticalScale(12),
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 20,
    elevation: 5,
  },
  title: {
    ...typography.bold,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: verticalScale(10),
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: colors.main,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    borderRadius: 8,
  },
  btntxt: {
    color: colors.black,
    fontWeight: "600",
  },
  qtyBtn: {
    paddingHorizontal: 10,
    backgroundColor: colors.gray,
    paddingVertical: 6,
    borderRadius: 4
  }
});
