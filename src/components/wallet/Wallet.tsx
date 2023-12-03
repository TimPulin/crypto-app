import Currency from '../Currency';
import InputCustom from '../input-custom/InputCustom';

import { WalletType } from '../../utils/types';

type WalletPropsType = {
  wallet: WalletType;
};

export default function Wallet(props: WalletPropsType) {
  const { wallet } = props;
  return (
    <div className="wallet" id={wallet.id}>
      <button type="button" className="button button--poor button--remove">REMOVE</button>
      <InputCustom
        placeholder="wallet address"
        value={wallet.address}
      />
      <InputCustom
        placeholder="amount"
        JSXElement={<Currency name="usdt" code="(erc-20)" />}
        value={wallet.amount}
      />
      <button type="button" className="button button--poor button--clear">CLEAR</button>
    </div>
  );
}
