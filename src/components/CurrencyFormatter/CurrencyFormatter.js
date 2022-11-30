import React from 'react';
import { isNumeric } from '../../helpers/general';
// import styles from './CurrencyFormatter.module.css';
const isSSR = typeof window === "undefined"

const CurrencyFormatter = ({
  amount,
  currency = 'USD',
  appendZero = false,
  useDollar = false,
}) => {
  const [displayAmount, setDisplayAmount] = React.useState('USD');
  const [isSSR, setIsSSR] = React.useState(true);

  React.useEffect(() => {
    setIsSSR(false);
    setDisplayAmount((typeof amount !== 'number' && parseFloat(amount?.replace('$', ''))) || amount)
  }, [])

  /* Set language display */
  const languageCode =
    typeof window !== 'undefined'
      ? window.navigator.language || 'en-AU'
      : 'en-AU';

  /* Format and return */
  // isolate currency
  const formatObject = new Intl.NumberFormat(languageCode, {
    style: 'currency',
    currency,
  });
  let symbol = '$';
  let formattedPrice = formatObject.format(displayAmount);
  if ('formatToParts' in formatObject) {
    const formattedPriceParts = formatObject.formatToParts(displayAmount);
    if (useDollar === false) symbol = formattedPriceParts[0].value;
    const currencyValue = formattedPriceParts.find(
      (obj) => obj.type === 'currency'
    );
    const decimalValue = formattedPriceParts.find(
      (obj) => obj.type === 'fraction'
    );
    formattedPrice = formattedPrice.replace(currencyValue.value, '');
    if (decimalValue && decimalValue.value === '00' && !appendZero) {
      formattedPrice = formattedPrice.replace(`.${decimalValue.value}`, '');
    }
  } else {
    // new Intl.NumberFormat is not supported; return amount with dollar sign
    formattedPrice = amount;
  }

  const priceComponent = (
    <>
      <span>{symbol}</span>
      <span>{formattedPrice}</span>
    </>
  );

  return !isSSR ? isNumeric(amount) ? priceComponent : 'No price available' : 'No price available';
};

export default CurrencyFormatter;
