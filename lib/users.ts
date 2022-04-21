import { z } from "zod";
import { readFileSync } from 'fs';
import path from "path";

const csvToObj = require('csv-to-js-parser').csvToObj;
const ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

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

type User = z.infer<typeof userSchema>;

export async function getAllUsers(): Promise<User[]> {
  const json_file = readFileSync(path.resolve(process.cwd(), 'users.json'), 'utf-8');
  const csv_file = readFileSync(path.resolve(process.cwd(), 'users.csv'), 'utf-8');
  const array_of_objects = [...JSON.parse(json_file), ...csvToObj(csv_file.toString())];

  let users: User[] = [];

  for (const item of array_of_objects) {
    const itemNewBind = {
      fullName: item.full_name || item.name,
      username: item.nickname || item.username,
      email: item.email_address || item.email,
      avatar: item.user_image || item.avatar,
      address: {
        street: item.user_address?.street_address || item['address.street'],
        city: item.user_address?.city.city_name || item['address.city'],
        zip: item.user_address?.city.city_zip_code || item['address.zipcode'],
      },
      phoneNumber: item.phone_number || item.phone,
      gender: item.gender || item['bio.gender'],
      age: item.age || new AgeFromDateString(item['bio.dob'].substring(0,10)).age,
      images: item.imgs || [
        item['imgs.0'],
        item['imgs.1'],
        item['imgs.2'],
        item['imgs.3'],
      ],
    }

    const user = userSchema.safeParse(itemNewBind);
    if (user.success) {
      users.push(user.data);
    }
  }

  return users;
}
