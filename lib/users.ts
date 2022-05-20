import { z } from "zod";
import csv from "csvtojson";

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
  const csvParserConfig = {
    delimiter: ",",
    trim: true,
    includeColumns: /(name|email|avatar|address.street|address.city|address.zipcode|phone|bio|images)/,
    colParser: {
      "bio.dob":function(item: string, head: string){
        return getAge(item)
      }
    }
  }

  await fetch('users.csv')
    .then(response => response.text())
    .then(data => csv(csvParserConfig).fromString(data))
    .then((parsed)=>console.log(parsed))
    .catch((error) => console.log(error))
  
  function getAge(dateOfBirth: string){
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }


  return [];
}
