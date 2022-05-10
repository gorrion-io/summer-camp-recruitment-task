import { IUser, IPersonality, IAddress } from "./IUser.interface";

export interface IUserProps {
    userData: IUser;
}

export interface IUsersArrayProps {
    usersDataArray: Array<IUser>;
}

export interface IPersonalityProps {
    personality: IPersonality;
}

export interface IAddressProps {
    address: IAddress;
}

export interface IImagesProps {
    images: Array<string>;
}

export interface IFooterElementProps {
    path: string;
    number: number;
}
