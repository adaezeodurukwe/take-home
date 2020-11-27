export default function setCurrency(currencyVar) {
  return (value) => {
    console.log(value);
    currencyVar(value)
  }
}