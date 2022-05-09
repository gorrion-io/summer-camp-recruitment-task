const fs = require("fs");
import { User } from "../lib/users";

export const dataMerger = (
    firstDatabaseToMerge: Array<User[]>,
    secondDatabaseToMerge: Array<User[]>,
    outputMergedDatabase: string
): Array<User[]> => {
    const finalDatabase: Array<User[]> = firstDatabaseToMerge.concat(
        secondDatabaseToMerge
    );

    fs.writeFile(
        outputMergedDatabase,
        JSON.stringify(finalDatabase),
        (err: Error) => {
            if (err) throw err;

            console.log("Databases merged!");
        }
    );

    return finalDatabase;
};
