interface DateAsNumberObj {
  day: number;
}

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

export const daysBetween = (date1: Date, date2: Date): number => {
  const dateOne: DateAsNumberObj = {
    day: date1.getDate(),
  };

  const dateTwo: DateAsNumberObj = {
    day: date2.getDate(),
  };

  return dateTwo.day - dateOne.day;
};
