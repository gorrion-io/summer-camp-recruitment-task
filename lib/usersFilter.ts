import { User } from "./users";

export const filterUsersByAge = (
    inputDatabase: Array<User>,
    minAge: number,
    maxAge: number
): Array<User> => {
    const finalDatabase = inputDatabase.filter((user) => {
        const { age } = user;
        return user.age >= minAge && age <= maxAge;
    });

    return finalDatabase;
};
