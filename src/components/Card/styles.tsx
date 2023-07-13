import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginVertical: 8,
  },
  header: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },
  content: {
    padding: 16,
  },
  textName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
});
