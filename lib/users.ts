import { z } from "zod";
import Papa from "papaparse";
import usersJSON from "../users.json";

const userSchema = z.object({
  fullName: z.string().min(2).max(50),
  username: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  avatar: z.string().url(),
  address: z.object({
    street: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    zip: z.string().min(2).max(20),
  }),
  phoneNumber: z.string().regex(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/),
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  age: z.number().min(18).max(65),
  images: z.array(z.string().url()),
});

export type User = z.infer<typeof userSchema>;

type CSV = {
  name: string;
  username: string;
  email: string;
  avatar: string;
  ["address.photo"]: string;
  ["address.street"]: string;
  ["address.suite"]: string;
  ["address.city"]: string;
  ["address.zipcode"]: string;
  ["address.localization.lat"]: string;
  ["address.localization.lon"]: string;
  phone: string;
  website: string;
  ["company.name"]: string;
  ["company.catchPhrase"]: string;
  ["company.bs"]: string;
  ["bio.gender"]: "Male" | "Female";
  ["bio.dob"]: Date;
  ["imgs.0"]: string;
  ["imgs.1"]: string;
  ["imgs.2"]: string;
  ["imgs.3"]: string;
};

export async function getAllUsers(): Promise<User[]> {
  var allUsers: User[] = []; //variable for final data

  //parsing CSV data
  Papa.parse("../users.csv", {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
      let data = results.data as CSV[];
      //altering CSV data
      let newData: User[] = data.map((user: any) => {
        //counting users age
        const birthDate: Date = user["bio.dob"];
        const birthYear: number = birthDate.getFullYear();
        const today: Date = new Date();
        const currentYear: number = today.getFullYear();
        const userAge: number = currentYear - birthYear;

        return {
          fullName: user.name,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          address: {
            street: user["address.street"],
            city: user["address.city"],
            zip: user["address.zipcode"],
          },
          phoneNumber: user.phone,
          gender: user["bio.gender"],
          age: userAge,
          images: [
            user["imgs.0"],
            user["imgs.1"],
            user["imgs.2"],
            user["imgs.3"],
          ],
        };
      });
      //passing newData to another function
      mergeData(newData);
    },
  });

  //altering, filtering and merging JSON data with CSV data
  const mergeData = (data: User[]): void => {
    //altering JSON data
    const usersJSONAltered = usersJSON.map((user) => {
      return {
        fullName: user.full_name,
        username: user.nickname,
        email: user.email_address,
        avatar: user.user_image,
        address: {
          street: user.user_address.street_address,
          city: user.user_address.city.city_name,
          zip: user.user_address.city.city_zip_code,
        },
        phoneNumber: user.phone_number,
        gender: user.gender,
        age: user.age,
        images: user.imgs,
      };
    });
    //merging
    const allData: User[] = [...data, ...(usersJSONAltered as User[])];
    //filtering all data
    const filteredAllData: User[] = allData.filter((user) => {
      return user.age >= 18 && user.age <= 65;
    });
    allUsers = filteredAllData;
  };

  return new Promise((resolve) => setTimeout(() => resolve(allUsers), 100));
}
