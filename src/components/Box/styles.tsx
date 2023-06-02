import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-evenly',
    padding: 24,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
});
