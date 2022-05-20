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

export type User = z.infer<typeof userSchema>;

export async function getAllUsers(): Promise<User[]> {
  async function getCSVUsers(){
    const csvParserConfig = {
      delimiter: ",",
      trim: true,
      includeColumns: /(name|email|avatar|address.street|address.city|address.zipcode|phone|bio|imgs)/,
      colParser: {
        "bio.dob":function(item: string){
          return getAge(item)
        }
      },
      checkType: false
    }
       
    function getAge(dateOfBirth: string){
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    }

    try{
      const response = await fetch("users.csv")
      const parsedCSV = csv(csvParserConfig).fromString( await response.text())
      const mappedData: User[] = (await parsedCSV).map(({name, username, avatar, email, address, phone, bio, imgs}) => {
        const newUser: User = {
          fullName: name,
          username: username,
          avatar: avatar,
          email: email,
          address: {
            street: address.street,
            city: address.city,
            zip: address.zipcode
          },
          phoneNumber: phone,
          gender: bio.gender,
          age: bio.dob,
          images: imgs
        }
        return newUser
      })
      return mappedData
    }
    catch(error){
      console.log(error)
      return []
    }
  }

  
  function filterUsers(array: User[]){
    const filteredArray: User[] = array.filter(user => userSchema.safeParse(user).success)
    return filteredArray
  }

  return filterUsers(await getCSVUsers())
}
