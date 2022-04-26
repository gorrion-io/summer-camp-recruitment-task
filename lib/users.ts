import { z } from "zod";
import userJson from "../users.json";
import fs from "fs";
import { parse } from "fast-csv";

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

const jsonUserSchema = z.object({
  full_name: z.string(),
  nickname: z.string(),
  email_address: z.string(),
  user_image: z.string(),
  user_address: z.object({
    city: z.object({
      city_name: z.string(),
      city_zip_code: z.string(),
    }),
    street_address: z.string(),
  }),
  phone_number: z.string(),
  age: z.number().min(18).max(65),
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  imgs: z.array(z.string().url()),
});

const csvUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  avatar: z.string(),
  "address.street": z.string(),
  "address.city": z.string(),
  "address.zipcode": z.string(),
  phone: z.string(),
  "bio.gender": z.union([z.literal("Male"), z.literal("Female")]),
  "bio.dob": z.string(),
});

type User = z.infer<typeof userSchema>;
type UserJson = z.infer<typeof jsonUserSchema>;
type UserCsv = z.infer<typeof csvUserSchema>;

export async function getCsvData(): Promise<UserCsv[]> {
  const rows: any = [];
  return new Promise((res, rej) => {
    fs.createReadStream("users.csv")
      .pipe(parse({ headers: true }))
      .on("error", (error) => rej(error))
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        res(rows);
      });
  });
}

const userSchemaCreator = function (userData: UserJson) {
  return {
    fullName: userData.full_name,
    username: userData.nickname,
    email: userData.email_address,
    avatar: userData.user_image,
    address: {
      street: userData.user_address.street_address,
      city: userData.user_address.city.city_name,
      zip: userData.user_address.city.city_zip_code,
    },
    phoneNumber: userData.phone_number,
    gender: userData.gender,
    age: userData.age,
    images: userData.imgs,
  };
};

export async function getAllUsers(): Promise<User[]> {
  const csvData: UserCsv[] = await getCsvData();
  const newListOfUsersCsv: User[] = csvData.map((user: any) => {
    const age = (date: string) => {
      const dateOfBirth: Date = new Date(date);
      const currentDate: Date = new Date();
      const day = 1000 * 60 * 60 * 24;
      let result = 0;

      for (let i = 0; i <= 4; i++) {
        if ((currentDate.getFullYear() - i) % 4 === 0) {
          const leapYear =
            ((currentDate.getFullYear() - dateOfBirth.getFullYear()) / 4) * day;
          result =
            (currentDate.getTime() - dateOfBirth.getTime() - leapYear) /
            (day * 365);
        }
      }
      return Math.floor(result);
    };

    const imgs = Object.keys(user)
      .filter((property: string): boolean => property.includes("imgs."))
      .map((elem:string) => user[elem]);

    const newObject = userSchemaCreator({
      full_name: user["name"],
      nickname: user["username"],
      email_address: user["email"],
      user_image: user["avatar"],
      user_address: {
        street_address: user["address.street"],
        city: {
          city_name: user["address.city"],
          city_zip_code: user["address.zipcode"],
        },
      },
      phone_number: user["phone"],
      gender: user["bio.gender"],
      age: age(user["bio.dob"]),
      imgs: imgs,
    });
    return newObject;
  });

  const newListOfUsersJson: User[] = userJson.map((elem: any) =>
    userSchemaCreator(elem)
  );

  const concatList = newListOfUsersCsv.concat(newListOfUsersJson);
  const list: User[] = concatList.filter(
    (elem) => userSchema.safeParse(elem).success
  );
  return list;
}
