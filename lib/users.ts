import { z } from "zod";
import dataJson from "../users.json";
import dataCsv from "../userscsv.json";

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
	const userArrayJson: User[] = [];
	const userArrayCsv: User[] = [];

	dataJson.forEach(user => {
		userArrayJson.push({
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
			gender: user.gender === "Male" ? "Male" : "Female",
			age: user.age,
			images: user.imgs,
		});
	});

	dataCsv.forEach(user => {
		userArrayCsv.push({
			fullName: user.name,
			username: user.username,
			email: user.email,
			avatar: user.avatar,
			address: {
				street: user["address.street"],
				city: user["address.city"],
				zip: user["address.street"],
			},
			phoneNumber: user.phone,
			gender: user["bio.gender"] === "Male" ? "Male" : "Female",
			age: new Date().getFullYear() - new Date(user["bio.dob"]).getFullYear(),
			images: [user["imgs.0"], user["imgs.1"], user["imgs.2"], user["imgs.3"]],
		});
	});

	const allUser = [...userArrayJson, ...userArrayCsv].filter(user => {
		return user.age >= 18 && user.age <= 65;
	});

	return allUser;
}
