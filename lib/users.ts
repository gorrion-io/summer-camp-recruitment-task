import { z } from 'zod';
import csv from 'csvtojson';
import moment from 'moment';
import jsonUsers from '../users.json';

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

const parseCSVUsers = (unparsedUsers: any[]) => {
  const parsedUsers: User[] = [];

  for (const { name, username, email, avatar, address, phone, bio, imgs } of unparsedUsers) {
    const parsedUser: User = {
      fullName: name,
      username: username,
      email: email,
      avatar: avatar,
      address: {
        street: address.street,
        city: address.city,
        zip: address.zipcode,
      },
      phoneNumber: phone,
      gender: bio.gender,
      age: moment().diff(moment.parseZone(bio.dob), 'years'),
      images: imgs,
    };

    if (parsedUser.age >= 18 && parsedUser.age <= 65) parsedUsers.push(parsedUser);
  }

  return parsedUsers;
};

const parseJSONUsers = (unparsedUsers: any[]) => {
  const parsedUsers: User[] = [];

  for (const user of unparsedUsers) {
    const parsedUser: User = {
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

    if (parsedUser.age >= 18 && parsedUser.age <= 65) parsedUsers.push(parsedUser);
  }

  return parsedUsers;
};

export async function getAllUsers(): Promise<User[]> {
  const unparsedCSVUsers = await csv().fromFile('users.csv');

  const parsedCSVUsers: User[] = parseCSVUsers(unparsedCSVUsers);

  const parsedJSONUsers: User[] = parseJSONUsers(jsonUsers);

  const combinedUsers: User[] = parsedJSONUsers.concat(parsedCSVUsers);

  return combinedUsers;
}
