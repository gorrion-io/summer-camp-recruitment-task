import { UsersJsonListService } from './usersJsonList.service';
import { UsersCsvListService } from './usersCsvList.service';
import { User, userSchema } from '../lib/users';
import { HttpException } from '../utils/httpException';

export class UsersService {
  constructor(
    private usersCsvListService: UsersCsvListService,
    private usersJsonListService: UsersJsonListService,
  ) {}
  async parseAndMergeAndFilterUserLists(): Promise<User[]> {
    const JSON_USER_LIST_PATH = './users.json';
    const CSV_USER_LIST_PATH = './users.csv';

    const mergedUserLists = await this.readAndParseUsersLists(
      JSON_USER_LIST_PATH,
      CSV_USER_LIST_PATH,
    );
    const filteredUserList = this.filterUsersByAge(mergedUserLists, 18, 65);
    filteredUserList.forEach((user) => this.validateUser(user));
    return filteredUserList;
  }

  private filterUsersByAge(users: User[], minAge: number, maxAge: number) {
    return users.filter((user) => user.age >= minAge && user.age <= maxAge);
  }

  private async readAndParseUsersLists(
    jsonUserListPath: string,
    csvUserListPath: string,
  ) {
    const jsonUsersList =
      await this.usersJsonListService.readAndParseJsonUserList(
        jsonUserListPath,
      );
    const csvUsersList = await this.usersCsvListService.readAndParseCsvUserList(
      csvUserListPath,
    );
    const mergedUsersLists = [...jsonUsersList, ...csvUsersList];

    return mergedUsersLists;
  }

  private validateUser(user: User) {
    const result = userSchema.safeParse(user);
    if (result.success === false) {
      const message = result.error;
      throw new HttpException(JSON.stringify(message), 404);
    }
  }
}
