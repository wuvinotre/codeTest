import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/styles';

export const styles = StyleSheet.create({
  positionButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: 25,
  },
  positionModal: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  containerModal: {
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    elevation: 2,
    backgroundColor: COLORS.primary,
  },
  buttonOpen: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.primary,
  },
  textButton: {
    color: COLORS.textSecondary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  textButtonOpen: {
    fontSize: 16,
  },
});
