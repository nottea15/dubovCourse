import {colors} from '@constants/colors';
import {typography} from '@constants/typography';
import {verticalScale, moderateScale, scale} from '@utils/scaleFunction';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: verticalScale(16),
    marginTop: verticalScale(16),
  },
  title: {
    ...typography.title1,
    textAlign: 'center',
    marginTop: verticalScale(16),
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(6),
    marginBottom: verticalScale(18),
  },
  highlightedText: {
    ...typography.semiBold,
    color: colors.active,
  },
  forgotText: {
    fontSize: 12,
    lineHeight: 20,
  },
  authContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  authButton: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.gray2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 41,
    paddingVertical: verticalScale(16),
  },
  authBtnText: {
    ...typography.bold,
    color: colors.black,
  },
  agreeText: {
    ...typography.semiBold,
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    color: colors.gray2,
    textAlign: 'center',
    marginTop: verticalScale(24),
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  bottomTextText: {
    ...typography.medium,
    color: colors.gray2,
  },
  aggreeHighlightedText: {
    ...typography.semiBold,
    fontSize: 14,
    lineHeight: 20,
    color: colors.main,
  },
  highlightedTextBottom: {
    ...typography.bold,
    color: colors.active,
  },
  helperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: scale(8),
    alignSelf: 'flex-start',
  },
  helperText: {
    ...typography.medium,
    fontSize: 12,
    lineHeight: 18,
    color: colors.red,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});
