export default function setCurrency(currencyVar) {
  return (value) => {
    currencyVar(value);
  };
}