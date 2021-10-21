export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getNextMonday = () => {
  let d = new Date();
  return d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7 || 7));
};
