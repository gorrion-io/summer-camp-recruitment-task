import { z } from 'zod';
import usersFromJSON from '../users.json';
import csv from 'csvtojson';
import moment from 'moment';

// type of user in array

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
  gender: z.union([z.literal('Male'), z.literal('Female')]),
  age: z.number().min(18).max(65),
  images: z.array(z.string().url()),
});

type User = z.infer<typeof userSchema>;

export async function getAllUsers(): Promise<User[]> {
  // users.json tooling

  const usersJson: User[] = [];

  // converting data to UserSchema type

  usersFromJSON.forEach((value) => {
    usersJson.push({
      fullName: value.full_name,
      username: value.nickname,
      email: value.email_address,
      avatar: value.user_image,
      address: {
        street: value.user_address.street_address,
        city: value.user_address.city.city_name,
        zip: value.user_address.city.city_zip_code,
      },
      phoneNumber: value.phone_number,
      gender: value.gender === 'Female' ? 'Female' : 'Male',
      age: value.age,
      images: value.imgs,
    });
  });

  // users.csv tooling

  const usersFromCSV = await csv().fromFile('users.csv');
  const usersCSV: User[] = [];

  usersFromCSV.forEach((value) => {
    usersCSV.push({
      fullName: value.name,
      username: value.username,
      email: value.email,
      avatar: value.avatar,
      address: {
        street: value.address.street,
        city: value.address.city,
        zip: value.address.zipcode,
      },
      phoneNumber: value.phone,
      gender: value.bio.gender === 'Female' ? 'Female' : 'Male',
      age: moment().diff(moment(value.bio.dob), 'years'),
      images: value.imgs,
    });
  });

  // concat user's lists and filter
  const allUsers = usersJson
    .concat(usersCSV)
    .filter((value) => value.age >= 18 && value.age <= 65);

  return allUsers;
}
