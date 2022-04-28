import { z } from "zod";

export const userSchema = z.object({
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

export const jsonUserSchema = z.object({
  full_name: z.string().min(2).max(50),
  nickname: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[a-zA-Z0-9_]+$/),
  email_address: z.string().email(),
  user_image: z.string().url(),
  user_address: z.object({
    city: z.object({
      city_name: z.string().min(2).max(50),
      city_photo: z.string().url(),
      city_zip_code: z.string().min(2).max(20),
    }),
    street_address: z
      .string()
      .min(5)
      .max(50)
      .regex(/^[A-Za-z0-9'\.\-\s\,]$/),
    gps: z.array(z.number()),
  }),
  phone_number: z.string().regex(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/),
  user_url: z.string().url(),
  company: z.object({
    name: z.string().min(2).max(50),
    catchPhrase: z.string().min(2).max(50),
    bs: z.string().min(2).max(50),
  }),
  age: z.number().min(18).max(65),
  gender: z.union([z.literal("Male"), z.literal("Female")]),
  imgs: z.array(z.string().url()),
});

// csv user schema
export const csvUserSchema = z.object({
  name: z.string().min(2).max(50),
  username: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  avatar: z.string().url(),
  address: z.object({
    photo: z.string().url(),
    street: z.string().min(2).max(50),
    suite: z
      .string()
      .min(2)
      .max(40)
      .regex(/^[a-zA-Z0-9_]+$/),
    city: z.string(),
    zipcode: z.string(),
    localization: z.object({ lat: z.string(), lon: z.string() }),
  }),
  phone: z.string().regex(/^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/),
  website: z.string().url(),
  company: z.object({
    name: z.string().min(5).max(50),
    catchPhrase: z.string().min(5).max(50),
    bs: z.string().min(5).max(50),
  }),
  bio: z.object({
    gender: z.union([z.literal("Male"), z.literal("Female")]),
    dob: z.string(),
  }),
  imgs: z.array(z.string().url()),
});
