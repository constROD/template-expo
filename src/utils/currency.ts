export function formatToLocaleString(amount: number | string) {
  return Number(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatToPHP(amount: number | string) {
  return `PHP ${formatToLocaleString(amount)}`;
}
