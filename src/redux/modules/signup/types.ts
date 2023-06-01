import {PayloadAction} from '@reduxjs/toolkit';

export type State = {
  name: string;
};

export type setNameAction = PayloadAction<string>;
