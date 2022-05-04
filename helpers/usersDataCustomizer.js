const fs = require("fs");

const fileInputName = "data/users.json";
const fileOutputName = "data/usersTemp.json";

export const dataCustomizer = () => {
    const dataToCustomize = JSON.parse(fs.readFileSync(fileInputName));

    const newUserDataObj = [];

    dataToCustomize.map((inputUserData, index) => {
        const {
            full_name: fullName,
            nickname: userName,
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
            gender: gender,
            age: age,
            images: images,
        };

        newUserDataObj.push(customizedUserData);
    });

    fs.writeFile(fileOutputName, JSON.stringify(newUserDataObj), (err) => {
        if (err) throw err;

        console.log("New database successfully customized to the Schema");
    });

    return newUserDataObj;
};
