export type gender = 'Male'|'Female';

export type csvType = string|gender;

export type csvObj = Record<keyof csvPerson,csvType>;

export type User = {
    fullName: string;
    username: string;
    email: string;
    avatar: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    phoneNumber: string;
    gender: gender;
    age: number;
    images: string[];
};

export interface csvPerson {
    name:string;
    username:string;
    email:string;
    avatar:string;
    'adress.photo':string;
    'address.street': string;
    'address.suite': string;
    'address.city': string;
    'address.zipcode': string;
    'address.localization.lat': string;
    'address.localization.lon': string;
    phone: string;
    website: string;
    'company.name': string;
    'company.catchPhrase': string;
    'company.bs': string;
    'bio.gender': 'Male'|'Female';
    'bio.dob': string;
    'imgs.0': string;
    'imgs.1': string;
    'imgs.2': string;
    'imgs.3': string;
}