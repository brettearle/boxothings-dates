import { assertEquals, assertThrows } from "jsr:@std/assert";
import { daysBetween, daysSince } from "./mod.ts";

const test = Deno.test;

/**
 * Date Since
 */
test("get days since from date", () => {
  const date = new Date("2020-01-01T00:00:00Z");
  const daysSinceExpect = Math.floor(
    (new Date().getTime() - date.getTime()) /
      (1000 * 60 * 60 * 24),
  );
  const got = daysSince(date);
  assertEquals(got, daysSinceExpect);
});

test("should return 0 if date is today", () => {
  const date = new Date();
  const got = daysSince(date);
  assertEquals(got, 0);
});

test("should throw error if date is in the future", () => {
  const date = new Date("2033-01-01T00:00:00Z");
  assertThrows(() => daysSince(date), Error, "Date is in the future");
});

/**
 * Date Between
 */
test("days between two dates", () => {
  const date1 = new Date("2020-01-01T00:00:00Z");
  const date2 = new Date("2020-01-02T00:00:00Z");
  const got = daysBetween(date1, date2);
  assertEquals(got, 1);
});
