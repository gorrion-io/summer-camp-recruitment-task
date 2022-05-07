const fs = require("fs");

export const dataCustomizer = (inputDatabaseInJSON) => {
    const dataToCustomize = JSON.parse(fs.readFileSync(inputDatabaseInJSON));

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

    console.log("New database successfully customized to the Schema");

    return newUserDataObj;
};
