export const DateFormatter = (date: string) => {
  const oldData = new Date(date);
  const formatter =
    oldData.getFullYear() +
    '-' +
    ('0' + (oldData.getMonth() + 1)).slice(-2) +
    '-' +
    oldData.getDate();

  return formatter.split('-').reverse().join('/');
};
