export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const fomatedDate = `${(newDate.getUTCDate() + 100).toString().slice(1)}/${(
    newDate.getUTCMonth() + 101
  )
    .toString()
    .slice(1)}/${newDate.getUTCFullYear()} - ${(
    '0' + newDate.getUTCHours()
  ).slice(-2)}:${('0' + newDate.getUTCMinutes()).slice(-2)}`;

  return fomatedDate;
};
