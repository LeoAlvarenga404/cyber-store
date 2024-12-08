export function transformCurrency(value: number) {
  const currency = Number(value.toFixed(2));
  
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

}