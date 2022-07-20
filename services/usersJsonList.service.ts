import { readFile } from 'fs/promises';
import { User } from '../lib/users';
import { HttpException } from '../utils/httpException';
import { JsonParsedUser } from './types';

export class UsersJsonListService {
  async readAndParseJsonUserList(path: string) {
    try {
      const rawJsonUserList = await readFile(path, 'utf8');
      const parsedJsonUserList = JSON.parse(rawJsonUserList);
      const mappedUserList: User[] =
        this.mapJsonUsersObjectStructure(parsedJsonUserList);
      return mappedUserList;
    } catch (error) {
      throw new HttpException(
        'Data not found or server files are corrupted',
        404,
      );
    }
  }

  private mapJsonUsersObjectStructure(parsedCsvUserList: JsonParsedUser[]) {
    return parsedCsvUserList.map((user) => {
      return {
        fullName: user.full_name,
        username: user.nickname,
        email: user.email_address,
        avatar: user.user_image,
        address: {
          street: user.user_address.street_address,
          city: user.user_address.city.city_name,
          zip: user.user_address.city.city_zip_code,
        },
        phoneNumber: user.phone_number,
        gender: user.gender,
        age: user.age,
        images: user.imgs,
      };
    });
  }
}
