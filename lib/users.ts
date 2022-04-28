// env
require("dotenv").config({ path: "../.env" });

const csvtojson = require("csvtojson");

// types
import { URL } from "../types/url";
import { User, UserJSON, UserCSV } from "../types/userTypes";

const getUsersCsv = async (csvFilePath: string): Promise<User[]> => {
  // (2) convert csv to json
  const csvToJsonUsers: UserCSV[] = await csvtojson().fromFile(csvFilePath);

  let csvUsersFilteredByAge: User[] = [];

  let yearInMilliseconds: number = process.env.YEAR_IN_MILLISECONDS;

  let yrsInMilliseconds: number = process.env.YEAR_IN_MILLISECONDS * 18;

  // (4) filter users with age of 18-65
  csvToJsonUsers.filter((user: UserCSV) => {
    for (let prop in user) {
      if (prop === "bio") {
        const currentDate: number = Date.now();

        const dob: number = new Date(user[prop]["dob"]).getTime();

        if (currentDate - dob >= yrsInMilliseconds) {
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

const getUsersJSON = (jsonFilePath: string): User[] => {
  // users list from JSON file
  const jsonUsers: UserJSON[] = require(jsonFilePath);

  let jsonUsersFilteredByAge: User[] = [];

  let ageRange = {
    minAge: process.env.USER_MIN_AGE,
    maxAge: process.env.USER_MAX_AGE,
  };

  // (1) filter users which age is in a range 18-65
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
