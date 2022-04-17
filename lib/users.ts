import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string().min(2).max(50),
  username: z
    .string()
    .min(2)
    .max(40)
    // .regex(/^[a-zA-Z0-9_]+$/), // please see comments / questions below
    .regex(/^[a-zA-Z0-9_.]+$/),
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

export type User = z.infer<typeof userSchema>;

// export async function getAllUsers(): Promise<User[]> {
//   return [];
// } // function not used - please see comments below.

//********************************************************************************************************************************
// Please see classes / methods in folder services. I've decided to split the logic into couple more files. I hope it's ok.
//********************************************************************************************************************************
// I've created some functions/classes to handle exceptions
//********************************************************************************************************************************
// I've implemented some basic DI
//********************************************************************************************************************************
// I don't know what to do with regex checking for usernames in zod. It seems like either this regex is wrong or usernames provided are not valid. This needs to be adressed later. For now I've corrected regex and added dot ('.') to match also usernames with dot.
//********************************************************************************************************************************
