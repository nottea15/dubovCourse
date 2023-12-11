import { colors } from "@constants/colors";
import { typography } from "@constants/typography";
import { verticalScale, moderateScale, scale } from "@utils/scaleFunction";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    paddingHorizontal: scale(12),
    flexDirection: "row",
    gap: 2,
    width: "100%",
    marginVertical: 20
  },
  cameraButton: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
