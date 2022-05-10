const fs = require("fs");
import { User } from "../lib/users";

export const dataCustomizer = (inputDatabaseInJSON: string): Array<User[]> => {
    const dataToCustomize = JSON.parse(fs.readFileSync(inputDatabaseInJSON));

    const newUserDataObj: Array<any> = [];

    dataToCustomize.map((inputUserData) => {
        const {
            full_name: fullName,
            nickname: username,
            email_address: email,
            user_image: avatar,
            user_address: address,
            phone_number: phoneNumber,
            gender,
            age,
            imgs: images,
        } = inputUserData;

        const { city: cityData, street_address: street } = address;
        const { city_name: city, city_zip_code: zip } = cityData;

        const customizedUserData = {
            fullName,
            username,
            email,
            avatar,
            address: {
                street,
                city,
                zip,
            },
            phoneNumber,
            gender,
            age,
            images,
        };

        newUserDataObj.push(customizedUserData);
    });

    console.log("New database successfully customized to the Schema");

    return newUserDataObj;
};
