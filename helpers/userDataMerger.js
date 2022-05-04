const fs = require("fs");

const firstDatabasePath = "data/users.json";
const secondDatabasePath = "data/users.json";
const fileOutputName = "data/usersTemp2.json";

export const dataMerger = () => {
    const firstDatabaseToMerge = JSON.parse(fs.readFileSync(firstDatabasePath));
    const secondDatabaseToMerge = JSON.parse(fs.readFileSync(secondDatabasePath));

    const finalDatabase = [];

    firstDatabaseToMerge.map((userData, index) => finalDatabase.push(userData));
    secondDatabaseToMerge.map((userData, index) =>
        finalDatabase.push(userData)
    );

    fs.writeFile(fileOutputName, JSON.stringify(finalDatabase), (err) => {
        if (err) throw err;

        console.log("Databases merged!");
    });

    return finalDatabase;
};
