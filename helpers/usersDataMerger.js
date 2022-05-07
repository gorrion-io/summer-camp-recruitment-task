const fs = require("fs");

export const dataMerger = (
    firstDatabaseToMerge,
    secondDatabaseToMerge,
    outputMergedDatabase
) => {
    const finalDatabase = firstDatabaseToMerge.concat(secondDatabaseToMerge);

    fs.writeFile(outputMergedDatabase, JSON.stringify(finalDatabase), (err) => {
        if (err) throw err;

        console.log("Databases merged!");
    });

    return finalDatabase;
};
