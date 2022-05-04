import {User} from "./types";

export const evaluateDate = (userDate:string) : number => {
    return Math.floor(
        Math.abs(
            new Date().getTime()-Date.parse(userDate)
        )/(1000 * 3600 * 24*365)
    )
}

export const filterUsersByAge = (userArr:User[]) : User[] => {
    return userArr.filter(user =>user.age>=18&&user.age<=65);
}