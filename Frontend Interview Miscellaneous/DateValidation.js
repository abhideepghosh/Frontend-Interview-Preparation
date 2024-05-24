const dateValidation = (day, month, year) => {
  if (day > 31 || day < 1 || month > 12 || month < 1 || year < 1) {
    return false;
  }

  if (
    day === 31 &&
    (month === 2 || month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    return false;
  }

  if (month === 2) {
    if (day > 29) return false;
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (day === 29 && !isLeap) {
      return false;
    }
  }
  return true;
};

console.log(dateValidation(30, 2, 2020));
