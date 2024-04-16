interface DateAsNumberObj {
  day: number;
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
