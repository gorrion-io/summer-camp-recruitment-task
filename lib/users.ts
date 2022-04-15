import { z } from "zod";
import dataJSON from "../users.json";
import * as d3 from "d3-dsv";
import { fetchUsersCSV } from "../helpers/fetchUsersCSV";
import { parseUsersFromJSON } from "../helpers/parseUsersFromJSON";
import { parseUsersFromCSV } from "../helpers/parseUsersFromCSV";

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

export async function getAllUsers(): Promise<User[]> {
  const usersCSVString = await fetchUsersCSV("/users.csv");

  const usersCSV = parseUsersFromCSV(usersCSVString);
  const usersJSON = parseUsersFromJSON(dataJSON);

  return usersJSON
    .concat(usersCSV)
    .filter((user) => user.age >= 18 && user.age <= 65);
}
