require("dotenv").config({ path: "../.env" });

export const yearInMilliseconds: number = process.env.YEAR_IN_MILLISECONDS;

// 18 years in milliseconds
export const millisecondsMinAge: number =
  process.env.YEAR_IN_MILLISECONDS * process.env.USER_MIN_AGE;

// 65 years in milliseconds
export const millisecondsMaxAge: number =
  process.env.YEAR_IN_MILLISECONDS * process.env.USER_MAX_AGE;
