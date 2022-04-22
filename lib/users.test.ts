import { getAllUsers } from './users';

describe('getAllUsers()', () => {
  it('should return nonempty array', async () => {
    const allUsers = await getAllUsers();

    expect(allUsers.length).not.toBeLessThanOrEqual(0);
  });
});
