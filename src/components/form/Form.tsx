import Footer from '../Footer';
import AddDocumentIcon from '../icons/AddDocumentIcon';
import Wallet from '../wallet/Wallet';

export default function Form() {
  return (
    <form className="form">

      <Wallet address="" amount={undefined} />
      <Wallet
        address=""
        amount={undefined}
        JSXElement={<button type="button" className="button button--poor button--remove">REMOVE</button>}
      />

      <button type="button" className="button button--icon button--add-wallet">
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
