/**
 * @module dates
 * @description
 * A collection of functions for working with dates.
 * This module includes
 * - `daysSince` which returns the number of days since a given date.
 * @example
 * ```ts
 * import { daysSince } from "jsr:@boxothings/dates";
 *
 * const date = new Date("2020-01-01T00:00:00Z");
 * daysSince(date);
 * ```
 * - `daysBetween` which returns the difference in days between two dates.
 * @example
 * ```ts
 * import { daysBetween } from "jsr:@boxothings/dates";
 *
 * const date1st = new Date("2020-01-01T00:00:00Z");
 * const date3rd = new Date("2020-01-03T00:00:00Z");
 * daysBetween(date1st, date3rd);
 * //returns 2
 * ```
 */

interface DateMSProperties {
  day: number;
}

type Timezone = "UTC" | "local";

/**
 * Returns the number of days since the given date.
 * Defaults to returning days based off UTC time.
 * @param date The date to compare against.
 * @param timezone The timezone to use for the comparison.
 * Defaults to "UTC".
 * @returns The number of days since the given date.
 * @warn Throws an error if the date is in the future.
 * @warn Throws an error if the input is not a Date object.
 * ```ts
 * import { daysSince } from "jsr:@boxothings/dates";
 *
 * daySince(new Date("2020-01-01T00:00:00Z"), "UTC");
 * ```
 */
export const daysSince = (date: Date, timezone: Timezone = "UTC"): number => {
  if (!(date instanceof Date)) {
    throw new Error("Not a Date object");
  }

  if (date > new Date()) {
    throw new Error("Date is in the future");
  }

  if (timezone !== "UTC") {
    const daysSince = Math.floor(
      (new Date().getTime() - date.getTime() +
        (date.getTimezoneOffset() * 1000)) /
        (1000 * 60 * 60 * 24),
    );
    return daysSince;
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
  const dateOne: DateMSProperties = {
    day: date1.getDate(),
  };

  const dateTwo: DateMSProperties = {
    day: date2.getDate(),
  };
  const greaterDate = dateOne.day > dateTwo.day ? dateOne.day : dateTwo.day;
  const lesserDate = dateOne.day < dateTwo.day ? dateOne.day : dateTwo.day;
  return greaterDate - lesserDate;
};
