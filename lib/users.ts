// env
require("dotenv").config({ path: "../.env" });

// parse csv to json library
const csvtojson = require("csvtojson");

// app root path
const { path } = require("app-root-path");

const data = require("../users.json");

// types
import { User, UserJSON, UserCSV } from "../types/userTypes";

export const getUsersCsv = async (): Promise<User[]> => {
  // convert csv to json
  const csvToJsonUsers: UserCSV[] = await csvtojson().fromFile(
    `${path}/users.csv`
  );

  let csvUsersFilteredByAge: User[] = [];

  const yearInMilliseconds: number = process.env.YEAR_IN_MILLISECONDS;

  // user min age in milliseconds
  const millisecondsMinAge: number =
    process.env.YEAR_IN_MILLISECONDS * process.env.USER_MIN_AGE;

  // user max age in milliseconds
  const millisecondsMaxAge: number =
    process.env.YEAR_IN_MILLISECONDS * process.env.USER_MAX_AGE;

  // filter users with age of 18-65
  csvToJsonUsers.filter((user: UserCSV) => {
    for (let prop in user) {
      if (prop === "bio") {
        // get amount of milliseconds pass from 1980 till now
        const currentDate: number = Date.now();

        // get amount of milliseconds pass from 1980 to user birth date in milliseconds
        const dob: number = new Date(user[prop]["dob"]).getTime();

        const userAgeInMilliseconds: number = currentDate - dob;

        // if user age is in range 18-65
        if (
          userAgeInMilliseconds >= millisecondsMinAge &&
          userAgeInMilliseconds < millisecondsMaxAge + yearInMilliseconds
        ) {
          // calculate age
          let age: number = Math.floor(
            (currentDate - dob) / yearInMilliseconds
          );

          csvUsersFilteredByAge.push({
            fullName: user["name"],
            username: user["username"],
            email: user["email"],
            avatar: user["avatar"],
            address: {
              street: user["address"]["street"],
              city: user["address"]["city"],
              zip: user["address"]["zipcode"],
            },
            phoneNumber: user["phone"],
            gender: user["bio"]["gender"],
            age,
            images: user["imgs"],
          });
        }
      }
    }
  });
  return csvUsersFilteredByAge;
};

export const getUsersJSON = (): User[] => {
  // users list from JSON file
  const jsonUsers: UserJSON[] = data;

  let jsonUsersFilteredByAge: User[] = [];

  let ageRange = {
    minAge: process.env.USER_MIN_AGE,
    maxAge: process.env.USER_MAX_AGE,
  };

  // filter users which age is in a range 18-65
  jsonUsers.filter((user: UserJSON) => {
    for (let prop in user) {
      if (
        prop === "age" &&
        user[prop] >= ageRange.minAge &&
        user[prop] <= ageRange.maxAge
      ) {
        jsonUsersFilteredByAge.push({
          fullName: user["full_name"],
          username: user["nickname"],
          email: user["email_address"],
          avatar: user["user_image"],
          address: {
            street: user["user_address"]["street_address"],
            city: user["user_address"]["city"]["city_name"],
            zip: user["user_address"]["city"]["city_zip_code"],
          },
          phoneNumber: user["phone_number"],
          gender: user["gender"],
          age: user[prop],
          images: user["imgs"],
        });
      }
    }
  });
  return jsonUsersFilteredByAge;
};

export default async function getAllUsers(): Promise<User[]> {
  const usersFromCsv: User[] = await getUsersCsv();
  const usersFromJSON: User[] = getUsersJSON();

  return usersFromJSON.concat(usersFromCsv);
}

export type { User };
