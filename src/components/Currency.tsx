type CurrencyPropsType = {
  name: string;
  code?: string;
  amount?: number;
};

export default function Currency(props: CurrencyPropsType) {
  const { name, code = '', amount = null } = props;

  const formatAmount = () => {
    let amountLocal: string;
    if (amount !== null) {
      amountLocal = new Intl
        .NumberFormat('ru', { useGrouping: true, minimumFractionDigits: 2 })
        .format(amount)
        .replace(',', '.');
    } else {
      amountLocal = '';
    }
    return amountLocal;
  };
  return (
    <div className="currency">
      {formatAmount()}
      <div className="currency__name">
        {name}
        <span className="currency__code">{code}</span>
      </div>
    </div>
  );
}
Currency.defaultProps = {
  code: '',
  amount: null,
};
