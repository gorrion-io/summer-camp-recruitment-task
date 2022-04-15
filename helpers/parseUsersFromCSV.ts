import { User } from "../lib/users";
import * as d3 from "d3-dsv";
import moment from "moment";

export const parseUsersFromCSV = (csvString: string): User[] => {
  const parsedUsers = d3.csvParse(csvString);

  const users: User[] = [];

  parsedUsers.forEach(
    ({ name, username, email, avatar, phone, ...userData }) => {
      const birthDate = moment(userData["bio.dob"]);
      const now = moment();

      const age = now.diff(birthDate, "years");

      const newUser: User = {
        fullName: name!,
        username: username!,
        email: email!,
        avatar: avatar!,
        address: {
          street: userData["address.street"]!,
          city: userData["address.city"]!,
          zip: userData["address.zipcode"]!,
        },
        phoneNumber: phone!,
        gender: userData["bio.gender"] === "Male" ? "Male" : "Female",
        age,
        images: [
          userData["imgs.0"]!,
          userData["imgs.1"]!,
          userData["imgs.2"]!,
          userData["imgs.3"]!,
        ],
      };

      users.push(newUser);
    }
  );

  return users;
};
