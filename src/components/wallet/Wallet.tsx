import { ReactElement } from 'react';
import Currency from '../Currency';
import InputCustom from '../input-custom/InputCustom';

type WalletPropsType = {
  JSXElement?: ReactElement;
  address: string;
  amount: number | undefined;
};

export default function Wallet(props: WalletPropsType) {
  const { JSXElement, address, amount } = props;
  return (
    <div className="wallet">
      {JSXElement}
      <InputCustom
        placeholder="wallet address"
        value={address}
      />
      <InputCustom
        placeholder="amount"
        JSXElement={<Currency name="usdt" code="(erc-20)" />}
        value={amount}
      />
      <button type="button" className="button button--poor button--clear">CLEAR</button>
    </div>
  );
}

Wallet.defaultProps = {
  JSXElement: null,
};
