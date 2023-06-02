import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

const fontFamily = 'System';

export const styles = StyleSheet.create({
  button: {
    width: '25%',
    height: 32,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  textInput: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontFamily,
    fontWeight: 'bold',
  },
});
