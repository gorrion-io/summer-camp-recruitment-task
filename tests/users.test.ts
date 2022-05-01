import getAllUsers from "../lib/users";
import { User } from "../types/userTypes";

describe("Check users", () => {
  test("check if all users meet age requirements (18-65)", async () => {
    const users = await getAllUsers();
    users.forEach((user: User) => {
      expect(user.age).toBeGreaterThanOrEqual(18);
      expect(user.age).toBeLessThanOrEqual(65);
    });
  });

  test("check if returned list is an array", async () => {
    const users = await getAllUsers();
    expect(Array.isArray(users)).toBeTruthy();
  });
});
