import {createSelector} from '@reduxjs/toolkit';
import {AppState} from '../..';

const mainState = (store: AppState) => store.main;

export const getData = createSelector(mainState, signup => signup.data);
