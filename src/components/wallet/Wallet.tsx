import Currency from '../Currency';
import InputCustom from '../input-custom/InputCustom';

import { WalletType } from '../../utils/types';

type WalletPropsType = {
  wallet: WalletType;
  removeWallet: (id: string) => void;
  clearWallet: (id: string) => void;
};

export default function Wallet(props: WalletPropsType) {
  const { wallet, removeWallet, clearWallet } = props;
  return (
    <div className="wallet" id={wallet.id}>
      <button
        type="button"
        className="button button--poor button--remove"
        onClick={() => removeWallet(wallet.id)}
      >
        REMOVE
      </button>
      <InputCustom
        placeholder="wallet address"
        value={wallet.address}
      />
      <InputCustom
        placeholder="amount"
        JSXElement={<Currency name="usdt" code="(erc-20)" />}
        value={wallet.amount}
      />
      <button
        type="button"
        className="button button--poor button--clear"
        onClick={() => clearWallet(wallet.id)}
      >
        CLEAR
      </button>
    </div>
  );
}
