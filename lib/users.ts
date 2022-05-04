import {readFile} from "fs/promises";
import {createReadStream} from 'fs';
import {parse} from "csv-parse";
import {csvObj, csvPerson, gender, jsonPerson, User} from "../types";
import {evaluateDate, filterUsersByAge} from "../utils";


//function that reads csv file and put data to array
const handleCsvFile = ():Promise<string[][]> => {
    let localResults : string[][] = [];
    return new Promise((resolve, reject) => {
        createReadStream("./users.csv")
            .pipe(
                parse({
                    delimiter: ",",
                })
            )
            .on('data', (rowData: any) => {
                localResults.push(rowData);
            })
            .on('end', () => {
                resolve(localResults);
            });
    })
}

//function that parse raw data from arrays to Users objects
const parseRawCsvArray = (userArr:string[][]):User[] => {

    const fieldNames = [...userArr][0];

    userArr.splice(0,1);

    const arrOfObjects : csvObj[] = userArr.map(user=>{

        let localObj: csvObj = {} as csvPerson;

        for (let i=0;i<user.length;i++) {

            localObj[`${fieldNames[i]}` as keyof csvPerson]=user[i];

        }

        return localObj;

    })

    return arrOfObjects.map(user => {

        const age = evaluateDate(user["bio.dob"]);

        const addressObj = {
            street:user["address.street"],
            city:user["address.city"],
            zip:user["address.zipcode"],
        };

        const imagesArr = [
            user["imgs.0"],
            user["imgs.1"],
            user["imgs.2"],
            user["imgs.3"],
        ];


        let localObj : User  = {
            fullName:user.name,
            username:user.username,
            email:user.email,
            avatar:user.avatar,
            address:addressObj,
            phoneNumber:user.phone,
            gender:user["bio.gender"] as gender,
            age,
            images:imagesArr,
        };

        return localObj;

    })
}

//function that parse jsonPerson array to User array
const parseJsonArray = (usersArr:jsonPerson[]):User[] => {
    return usersArr.map(jsonUser=>{

        return {
            fullName:jsonUser.full_name,
            username:jsonUser.nickname,
            email:jsonUser.email_address,
            avatar:jsonUser.user_image,
            address:{
                street:jsonUser.user_address.street_address,
                city:jsonUser.user_address.city.city_name,
                zip:jsonUser.user_address.city.city_zip_code
            },
            phoneNumber:jsonUser.phone_number,
            gender:jsonUser.gender,
            age:jsonUser.age,
            images:jsonUser.imgs
        }
    })
}


export async function getAllUsers(): Promise<User[]> {
    //get data from json file to string
  const jsonData = await readFile("./users.json","utf-8");
    //parsing json string to array of jsonPerson objects
  const rawDataFromJson : jsonPerson[] = JSON.parse(jsonData);
    //parsing arr of jsonPerson objects to User Objects arr
  const parsedJsonArray = parseJsonArray(rawDataFromJson);
    //filter Users by age (18-65)
  const userArrayFromJsonFiltered = filterUsersByAge(parsedJsonArray);
    //get arrays of data from csv
  const rawCsvArray = await handleCsvFile();
    //parse arrays of data to Users objects
  const parsedCsvArray = parseRawCsvArray(rawCsvArray);
    //filter Users by age (18-65)
  const userArrayFromCsvFiltered = filterUsersByAge(parsedCsvArray);

  return userArrayFromJsonFiltered.concat(userArrayFromCsvFiltered);
}


