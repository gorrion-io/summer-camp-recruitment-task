export interface IPersonality {
    age: number;
    avatar: string;
    email: string;
    gender: "Male" | "Female";
    fullName: string;
    username: string;
}

export interface IAddress {
    city: string;
    street: string;
    zip: string;
}

export interface IUser {
    fullName: string;
    username: string;
    email: string;
    avatar: string;
    address: IAddress;
    phoneNumber: string;
    gender: "Male" | "Female";
    age: number;
    images: Array<string>;
}
