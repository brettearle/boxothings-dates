interface DateAsNumberObj {
  day: number;
}

/**
 * Result type
 * @returns {boolean} ok - if the result is ok
 * @returns {T | null} value - the value of the result if ok
 * @returns {Error} err - the error of the result if !ok
 */
interface Result<T> {
  ok: boolean;
  value: T | null;
  err: Error | null;
}

const daysSince = (date: Date): number => {
  if (date > new Date()) {
    throw new Error("Date is in the future");
  }
  const daysSince = Math.floor(
    (new Date().getTime() - date.getTime()) /
      (1000 * 60 * 60 * 24),
  );
  return daysSince;
};

const daysBetween = (date1: Date, date2: Date): number => {
  const dateOne: DateAsNumberObj = {
    day: date1.getDate(),
  };

  const dateTwo: DateAsNumberObj = {
    day: date2.getDate(),
  };

  return dateTwo.day - dateOne.day;
};

export { daysBetween, daysSince };
