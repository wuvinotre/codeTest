import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../../utils/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 22,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.text,
    fontSize: 22,
    marginBottom: 16,
    fontFamily: FONT_FAMILY,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.text,
    fontSize: 14,
    paddingBottom: 8,
    fontFamily: FONT_FAMILY,
  },
});
