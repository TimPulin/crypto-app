import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { WalletType } from '../../utils/types';

type WalletsFormType = {
  value: WalletType[]
};

type ActionType = {
  type: string;
  payload: WalletType[];
};

export const walletInitialState = {
  id: uuid(),
  address: '',
  amount: 0,
  currency: '',
};

const initialState:WalletsFormType = {
  value: [walletInitialState],
};

export const updateWalletsFormSlice = createSlice({
  name: 'wallets-form-instance',
  initialState,
  reducers: {
    updateWalletsForm: (state:WalletsFormType, action:ActionType) => {
      state.value = action.payload;
    },
  },
});

export const { updateWalletsForm } = updateWalletsFormSlice.actions;
export const updateWalletsFormReducer = updateWalletsFormSlice.reducer;
export type UpdateWalletsFormReducerType = {
  updateWalletsForm: (state:WalletsFormType, action:ActionType) => void;
};
