import csv from "csvtojson";
import { User } from "../lib/users";

export async function dataConverter(
    inputDatabaseInCSV: string
): Promise<User[]> {
    const newUserDataObj: Array<any> = [];

    const oldDataToConvert = await csv().fromFile(inputDatabaseInCSV);

    oldDataToConvert.map((inputUserData) => {
        const {
            name: fullName,
            username,
            email,
            avatar,
            address,
            phone: phoneNumber,
            bio,
            imgs: images,
        } = inputUserData;

        const { street, city, zipcode: zip } = address;
        const { gender, dob } = bio;

        const defineUserGender = (gender: string): string => {
            return gender === "Male" ? gender : "Female";
        };

        const calculateUserAge = (dateString: string): number => {
            const actualYear = new Date().getFullYear();
            const birthdayYear = new Date(dateString).getFullYear();

            return actualYear - birthdayYear;
        };

        const convertedUserData = {
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
            gender: defineUserGender(gender),
            age: calculateUserAge(dob),
            images,
        };

        newUserDataObj.push(convertedUserData);
    });

    console.log("Old database successfully rewritten to the new JSON file!");

    return newUserDataObj;
}
