import Currency from './Currency';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        Receive amount
        <Currency name="usdt" code="(erc-20)" amount={0} />
      </div>
      <button type="button" className="button button--primary button--disabled button--withdraw">Withdraw</button>
    </footer>
  );
}
