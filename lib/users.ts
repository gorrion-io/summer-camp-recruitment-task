import { z } from "zod";
import { readFileSync } from 'fs';
import path from "path";

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

  let users: User[] = [];

  for (const item of JSON.parse(json_file)) {
    const itemNewBind = {
      fullName: item.full_name,
      username: item.nickname,
      email: item.email_address,
      avatar: item.user_image,
      address: {
        street: item.user_address.street_address,
        city: item.user_address.city.city_name,
        zip: item.user_address.city.city_zip_code,
      },
      phoneNumber: item.phone_number,
      gender: item.gender,
      age: item.age,
      images: item.imgs,
    }

    const user = userSchema.safeParse(itemNewBind);
    if (user.success) {
      users.push(user.data);
    }
  }

  return users;
}
