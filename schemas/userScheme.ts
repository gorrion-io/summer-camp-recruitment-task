import { z } from "zod";

const url = z.string().url();

const stringMinMax = z.string().min(2).max(50);

const phoneNumberRegex = z.string().regex(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/);

const gender = z.union([z.literal("Male"), z.literal("Female")]);

const nicknameRegex = z
  .string()
  .min(2)
  .max(40)
  .regex(/^[a-zA-Z0-9_]+$/);

const streetAddressRegex = z
  .string()
  .min(5)
  .max(50)
  .regex(/^[A-Za-z0-9'\.\-\s\,]$/);

export const userSchema = z.object({
  fullName: z.string().min(2).max(50),
  username: nicknameRegex,
  email: z.string().email(),
  avatar: url,
  address: z.object({
    street: stringMinMax,
    city: stringMinMax,
    zip: stringMinMax,
  }),
  phoneNumber: phoneNumberRegex,
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  age: z.number().min(18).max(65),
  images: z.array(url),
});

export const jsonUserSchema = z.object({
  full_name: stringMinMax,
  nickname: nicknameRegex,
  email_address: z.string().email(),
  user_image: z.string().url(),
  user_address: z.object({
    city: z.object({
      city_name: stringMinMax,
      city_photo: url,
      city_zip_code: z.string().min(2).max(20),
    }),
    street_address: streetAddressRegex,
    gps: z.array(z.number()),
  }),
  phone_number: phoneNumberRegex,
  user_url: z.string().url(),
  company: z.object({
    name: stringMinMax,
    catchPhrase: stringMinMax,
    bs: stringMinMax,
  }),
  age: z.number().min(18).max(65),
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  imgs: z.array(url),
});

// csv user schema
export const csvUserSchema = z.object({
  name: stringMinMax,
  username: nicknameRegex,
  email: z.string().email(),
  avatar: url,
  address: z.object({
    photo: url,
    street: stringMinMax,
    suite: z
      .string()
      .min(2)
      .max(40)
      .regex(/^[a-zA-Z0-9_]+$/),
    city: z.string(),
    zipcode: z.string(),
    localization: z.object({ lat: z.string(), lon: z.string() }),
  }),
  phone: phoneNumberRegex,
  website: url,
  company: z.object({
    name: z.string().min(5).max(50),
    catchPhrase: z.string().min(5).max(50),
    bs: z.string().min(5).max(50),
  }),
  bio: z.object({
    gender,
    dob: z.string(),
  }),
  imgs: z.array(url),
});
