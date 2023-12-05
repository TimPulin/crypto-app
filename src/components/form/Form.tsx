import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';

import { cloneDeep } from 'lodash';
import { useEffect } from 'react';
import { useWalletsFormState } from '../../store/selectors';
import { updateWalletsForm } from '../../store/slicers/wallets-form-state-slice';
import Footer from '../Footer';
import AddDocumentIcon from '../icons/AddDocumentIcon';
import Wallet from '../wallet/Wallet';

const walletInitialState = {
  id: uuid(),
  address: '',
  amount: 0,
  currency: '',
};

export default function Form() {
  const dispatch = useDispatch();
  const walletsFormState = useWalletsFormState();

  useEffect(() => {
    console.log(walletsFormState);
  }, walletsFormState);

  function getWalletIndex(id: string):number {
    return walletsFormState.findIndex((item) => item.id === id);
  }

  const updateWallet = (id: string, name: string, value: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(walletsFormState);
    if (name === 'amount') {
      formStateTemp[walletIndex][name] = Number(value);
    } else {
      formStateTemp[walletIndex][name] = value;
    }
    dispatch(updateWalletsForm(formStateTemp));
  };

  const addWallet = () => {
    const formStateTemp = cloneDeep(walletsFormState);
    walletInitialState.id = uuid();
    formStateTemp.push(walletInitialState);
    dispatch(updateWalletsForm(formStateTemp));
  };

  const removeWallet = (id: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(walletsFormState);
    formStateTemp.splice(walletIndex, 1);
    dispatch(updateWalletsForm(formStateTemp));
  };

  const clearWallet = (id: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(walletsFormState);
    formStateTemp[walletIndex].address = '';
    formStateTemp[walletIndex].amount = 0;
    dispatch(updateWalletsForm(formStateTemp));
  };

  return (
    <form className="form">
      {
        walletsFormState.map((item) => (
          <Wallet
            key={item.id}
            wallet={item}
            updateWallet={updateWallet}
            removeWallet={removeWallet}
            clearWallet={clearWallet}
          />
        ))
      }

      <button
        type="button"
        className="button button--icon button--add-wallet"
        onClick={addWallet}
      >
        <AddDocumentIcon />
        Add new wallet
      </button>

      <Footer />
    </form>
  );
}

/* eslint-disable no-lone-blocks */
{ /* <label className="form__label">
<input type="text" placeholder="amount" className="input" />
<Currency name="usdt" code="(erc-20)" />
</label> */ }
