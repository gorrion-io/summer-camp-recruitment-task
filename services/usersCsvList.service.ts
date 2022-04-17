import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';
import { User } from '../lib/users';
import { CsvParsedUser } from './types';
import { HttpException } from '../utils/httpException';

export class UsersCsvListService {
  async readAndParseCsvUserList(path: string): Promise<User[]> {
    try {
      const rawCsvUserList = await readFile(path, 'utf8');

      const parsedCsvUserList: CsvParsedUser[] = parse(rawCsvUserList, {
        delimiter: ',',
        encoding: 'utf8',
        columns: true,
      });

      if (parsedCsvUserList.length === 0) {
        throw new Error();
      }

      const mappedUserList: User[] =
        this.mapCsvUsersObjectStructure(parsedCsvUserList);
      return mappedUserList;
    } catch (error) {
      throw new HttpException(
        'Data not found or server files are corrupted',
        404,
      );
    }
  }

  private mapCsvUsersObjectStructure(parsedCsvUserList: CsvParsedUser[]) {
    return parsedCsvUserList.map((user) => {
      const userAge = this.calculateUserAge(user);
      return {
        fullName: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        address: {
          street: user['address.street'],
          city: user['address.city'],
          zip: user['address.zipcode'],
        },
        phoneNumber: user.phone,
        gender: user['bio.gender'],
        age: userAge,
        images: [
          user['imgs.0'],
          user['imgs.1'],
          user['imgs.2'],
          user['imgs.3'],
        ],
      };
    });
  }

  private calculateUserAge(user: CsvParsedUser) {
    const todaysDate = new Date();
    const userDob = new Date(user['bio.dob']);
    const secondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const userAge = Math.floor(
      (todaysDate.valueOf() - userDob.valueOf()) / secondsInYear,
    );
    return userAge;
  }
}
