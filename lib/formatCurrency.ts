export const formatCurrency = (
  amount: number,
  currencyCode: string = "TWD"
): string => {
  try {
    return new Intl.NumberFormat("tw-TWD", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (error) {
    console.log("Invalid currency code:", currencyCode, error);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(0)}`;
  }
};
