import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../../utils/styles';

export const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONT_FAMILY,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONT_FAMILY,
  },
  text: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: FONT_FAMILY,
  },
});
