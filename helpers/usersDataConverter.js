const fs = require("fs");
const csv = require("csvtojson");

export async function dataConverter(inputDatabaseInCSV) {
    const newUserDataObj = [];

    const oldDataToConvert = await csv().fromFile(inputDatabaseInCSV);

    oldDataToConvert.map((userData, index) => {
        const {
            name: fullName,
            username,
            email,
            avatar,
            address,
            phone: phoneNumber,
            bio,
            imgs,
        } = userData;

        const { street, city, zipcode: zip } = address;
        const { gender, dob } = bio;

        const defineUserGender = (gender) => {
            return gender === "Male" ? gender : "Female";
        };

        const calculateUserAge = (dateString) => {
            const actualYear = new Date().getFullYear();
            const birthdayYear = new Date(dateString).getFullYear();

            return actualYear - birthdayYear;
        };

        const convertedUserData = {
            fullName: fullName,
            username: username,
            email: email,
            avatar: avatar,
            address: {
                street: street,
                city: city,
                zip: zip,
            },
            phoneNumber: phoneNumber,
            gender: defineUserGender(gender),
            age: calculateUserAge(dob),
            images: imgs,
        };

        newUserDataObj.push(convertedUserData);
    });

    console.log("Old database successfully rewritten to the new JSON file!");

    return newUserDataObj;
}
