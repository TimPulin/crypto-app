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

  // const updateFormState = () => {
  //   console.log(formState, setFormState);
  // };

  const addWallet = () => {
    const formStateTemp = cloneDeep(formState);
    formStateTemp.push(walletInitialState);
    setFormState(formStateTemp);
  };

  return (
    <form className="form">
      {
        formState.map((item) => (
          <Wallet wallet={item} key={item.id} />
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
