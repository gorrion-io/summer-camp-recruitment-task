import { dataConverter } from "../helpers/usersDataConverter";
import { dataCustomizer } from "../helpers/usersDataCustomizer";
import { dataMerger } from "../helpers/usersDataMerger";

const inputDatabaseInCSV = "data/users.csv";
const inputDatabaseInJSON = "data/users.json";
const outputmergedDatabase = "data/usersNewDB.json";

export async function generateUsersData() {
    const convertedDatabase = await dataConverter(inputDatabaseInCSV);
    const customizedDatabase = dataCustomizer(inputDatabaseInJSON);
    return dataMerger(
        convertedDatabase,
        customizedDatabase,
        outputmergedDatabase
    );
}
