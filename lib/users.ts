// env
require("dotenv").config({ path: "../.env" });

// parse csv to json library
const csvtojson = require("csvtojson");

// types
import { URL } from "../types/url";
import { User, UserJSON, UserCSV } from "../types/userTypes";

// constants
import {
  yearInMilliseconds,
  millisecondsMinAge,
  millisecondsMaxAge,
} from "../constants/userAge";

export const getUsersCsv = async (csvFilePath: string): Promise<User[]> => {
  // convert csv to json
  const csvToJsonUsers: UserCSV[] = await csvtojson().fromFile(csvFilePath);

  let csvUsersFilteredByAge: User[] = [];

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

export const getUsersJSON = (jsonFilePath: string): User[] => {
  // users list from JSON file
  const jsonUsers: UserJSON[] = require(jsonFilePath);

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

export default async function getAllUsers(url: URL): Promise<User[]> {
  const usersFromCsv: User[] = await getUsersCsv(url.pathToCsv);
  const usersFromJSON: User[] = getUsersJSON(url.pathToJSON);

  return usersFromJSON.concat(usersFromCsv);
}

getAllUsers({ pathToCsv: "../users.csv", pathToJSON: "../users.json" }).then(
  (res) => console.log(res)
);
