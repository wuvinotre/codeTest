import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 24,
  },
  text: {
    fontSize: 14,
    paddingBottom: 8,
  },
});
