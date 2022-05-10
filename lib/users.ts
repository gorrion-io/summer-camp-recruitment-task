import { z } from "zod";
import { filterUsersByAge } from "./usersFilter";

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
    const usersData = await fetch("http://localhost:3000/api/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });

    return usersData;
}

export async function getFilteredUsers(
    minAge: number,
    maxAge: number
): Promise<User[]> {
    const filteredData = filterUsersByAge(await getAllUsers(), minAge, maxAge);

    return filteredData;
}
