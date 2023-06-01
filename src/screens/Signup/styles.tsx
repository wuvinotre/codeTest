import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

const fontFamily = 'System';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',

    justifyContent: 'space-evenly',
    padding: 24,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 16,
  },
  header: {
    color: COLORS.text,
    fontSize: 22,
    fontFamily,
    fontWeight: 'bold',
  },
  subHeader: {
    color: COLORS.text,
    fontSize: 14,
    paddingTop: 24,
    paddingBottom: 8,
    fontFamily,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 8,
    fontSize: 14,
    padding: 6,
    marginBottom: 22,
  },
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