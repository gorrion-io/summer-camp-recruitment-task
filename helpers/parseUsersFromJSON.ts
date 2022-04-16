import { User } from "../lib/users";

interface userJSON {
  full_name: string;
  nickname: string;
  email_address: string;
  user_image: string;
  user_address: {
    city: {
      city_name: string;
      city_photo: string;
      city_zip_code: string;
    };
    street_address: string;
    gps: string[];
  };
  phone_number: string;
  gender: string;
  age: number;
  imgs: string[];
}

export const parseUsersFromJSON = (dataJSON: userJSON[]): User[] => {
  const users: User[] = [];

  dataJSON.forEach(
    ({
      full_name,
      nickname,
      email_address,
      user_image,
      user_address,
      phone_number,
      gender,
      age,
      imgs,
    }) => {
      const streetName = user_address.street_address
        .split(" ")
        .slice(1)
        .join(" ");

      users.push({
        fullName: full_name,
        username: nickname,
        email: email_address,
        avatar: user_image,
        address: {
          street: streetName,
          city: user_address.city.city_name,
          zip: user_address.city.city_zip_code,
        },
        phoneNumber: phone_number,
        gender: gender === "Male" ? "Male" : "Female",
        age,
        images: imgs,
      });
    }
  );

  return users;
};
