interface DateAsNumberObj {
  day: number;
}

/**
 * Returns the number of days since the given date.
 * Throws an error if the date is in the future.
 * Throws an error if the input is not a Date object.
 */
export const daysSince = (date: Date): number => {
  if (!(date instanceof Date)) {
    throw new Error("Not a Date object");
  }
  if (date > new Date()) {
    throw new Error("Date is in the future");
  }
  const daysSince = Math.floor(
    (new Date().getTime() - date.getTime()) /
      (1000 * 60 * 60 * 24),
  );
  return daysSince;
};

/**
 * This returns the difference in days between two dates.
 * Regardless of the order of the dates, the result will always be positive.
 */
export const daysBetween = (date1: Date, date2: Date): number => {
  const dateOne: DateAsNumberObj = {
    day: date1.getDate(),
  };

  const dateTwo: DateAsNumberObj = {
    day: date2.getDate(),
  };

  return dateTwo.day - dateOne.day;
};
