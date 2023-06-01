import {createSelector} from '@reduxjs/toolkit';
import {AppState} from '../..';

const signupState = (store: AppState) => store.signup;

export const getName = createSelector(signupState, signup => signup.name);
