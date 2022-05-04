const fs = require("fs");
const csvToJson = require("convert-csv-to-json");

const fileInputName = "data/users.csv";
const fileOutputName = "data/usersNewDB.json";

export const dataConverter = () => {
    const newUserDataObj = [];

    const oldDataToConvert = csvToJson
        .fieldDelimiter(",")
        .getJsonFromCsv(fileInputName);

    for (let i = 0; i < oldDataToConvert.length; i++) {
        const {
            name: fullName,
            username: userName,
            email,
            avatar,
            "address.street": street,
            "address.city": city,
            "address.zipcode": zip,
            phone: phoneNumber,
            "bio.gender": gender,
            "bio.dob": dob,
            "imgs.0": img0,
            "imgs.1": img1,
            "imgs.2": img2,
            "imgs.3": img3,
        } = oldDataToConvert[i];

        const defineUserGender = () => {
            const genderLocation =
                gender === "Male" || gender === "Female" ? gender : dob;

            return genderLocation;
        };

        const calculateUserAge = () => {
            const birthLocation = !isNaN(new Date(dob).getFullYear())
                ? dob
                : img0;

            const actualYear = new Date().getFullYear();
            const birthdayYear = new Date(birthLocation).getFullYear();

            return actualYear - birthdayYear;
        };

        const convertedUserData = {
            fullName: fullName,
            userName: userName,
            email: email,
            avatar: avatar,
            address: {
                street: street,
                city: city,
                zip: zip,
            },
            phoneNumber: phoneNumber,
            gender: defineUserGender(),
            age: calculateUserAge(),
            images: [img1, img2, img3],
        };

        newUserDataObj.push(convertedUserData);
    }

    fs.writeFile(fileOutputName, JSON.stringify(newUserDataObj), (err) => {
        if (err) throw err;

        console.log(
            "Old database successfully rewritten to the new JSON file!"
        );
    });

    return newUserDataObj;
};
