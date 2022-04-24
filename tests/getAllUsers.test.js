// lib
import { isArray } from 'util';
import { getAllUsers } from '../lib/users';

describe('Check we get all users', () => {
  test('check if we have any users', async () => {
    const allUsers = await getAllUsers();
    expect(allUsers.length > 0 && Array.isArray(allUsers)).toBeTruthy();
  });
});
