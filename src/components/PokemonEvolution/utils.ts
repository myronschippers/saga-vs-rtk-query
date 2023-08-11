export function capitalizeString(strVal: string) {
  const firstChar = strVal[0].toLocaleUpperCase();

  return `${firstChar}${strVal.slice(1)}`;
}
