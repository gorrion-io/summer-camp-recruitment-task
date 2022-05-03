const fs = require("fs");
const csvToJson = require("convert-csv-to-json");

const fileInputName = "data/users.csv";
const fileOutputName = "data/users.json";

export const dataConverter = () => {
    // csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);

    const newUserBase = fs.readFileSync(fileOutputName);
    const newUserDataObj = JSON.parse(newUserBase);

    const json = csvToJson.fieldDelimiter(",").getJsonFromCsv("data/users.csv");
    for (let i = 0; i < json.length; i++) {

        const defineUserGender = () => {
            const genderLocation =
                json[i]["bio.gender"] === "Male" ||
                json[i]["bio.gender"] === "Female"
                    ? "bio.gender"
                    : "bio.dob";

            return json[i][genderLocation];
        };

        const calculateUserAge = () => {
            const birthLocation = !isNaN(
                new Date(json[i]["bio.dob"]).getFullYear()
            )
                ? "bio.dob"
                : "imgs.0";

            const actualYear = new Date().getFullYear();
            const birthdayYear = new Date(json[i][birthLocation]).getFullYear();

            return actualYear - birthdayYear;
        };

        const convertedUserData = {
            fullname: json[i].name,
            userName: json[i].username,
            email: json[i].email,
            avatar: json[i].avatar,
            address: {
                street: json[i]["address.street"],
                city: json[i]["address.city"],
                zip: json[i]["address.zipcode"],
            },
            phoneNumber: json[i].phone,
            gender: defineUserGender(),
            age: calculateUserAge(),
            images: [json[i]["imgs.1"], json[i]["imgs.2"], json[i]["imgs.3"]],
        };

        console.log(convertedUserData);

        newUserDataObj.push(convertedUserData);
    }

    fs.writeFile(fileOutputName, JSON.stringify(newUserDataObj), (err) => {
        if (err) throw err;

        console.log(
            "Old database successfully rewritten to the new JSON file!"
        );
    });

    return json;
};
