import jest from "jest";
import { getUsersCsv, getUsersJSON } from "../lib/users";
import getAllUsers from "../lib/users";
import handler from "../pages/api/users";

describe("Initial tests", () => {
  test("Initial test", () => {
    expect(true).toBeTruthy();
  });
});
