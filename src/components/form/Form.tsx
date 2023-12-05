import { useState } from 'react';
import uuid from 'react-uuid';
import { cloneDeep } from 'lodash';
import Footer from '../Footer';
import AddDocumentIcon from '../icons/AddDocumentIcon';
import Wallet from '../wallet/Wallet';

import { WalletType } from '../../utils/types';

const walletInitialState = {
  id: uuid(),
  address: '',
  amount: undefined,
  currency: '',
};

export default function Form() {
  const [formState, setFormState] = useState<WalletType[]>([walletInitialState]);

  function getWalletIndex(id: string):number {
    return formState.findIndex((item) => item.id === id);
  }

  const updateWallet = (id: string, name: string, value: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(formState);
    if (name === 'amount') {
      formStateTemp[walletIndex][name] = Number(value);
    } else {
      formStateTemp[walletIndex][name] = value;
    }
    setFormState(formStateTemp);
  };

  const addWallet = () => {
    const formStateTemp = cloneDeep(formState);
    walletInitialState.id = uuid();
    formStateTemp.push(walletInitialState);
    setFormState(formStateTemp);
  };

  const removeWallet = (id: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(formState);
    formStateTemp.splice(walletIndex, 1);
    setFormState(formStateTemp);
  };

  const clearWallet = (id: string) => {
    const walletIndex = getWalletIndex(id);
    const formStateTemp = cloneDeep(formState);
    formStateTemp[walletIndex].address = '';
    formStateTemp[walletIndex].amount = undefined;
    setFormState(formStateTemp);
  };

  return (
    <form className="form">
      {
        formState.map((item) => (
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
