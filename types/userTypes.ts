import { z } from "zod";
import {
  userSchema,
  jsonUserSchema,
  csvUserSchema,
} from "../schemas/userScheme";

export type User = z.infer<typeof userSchema>;
export type UserCSV = z.infer<typeof csvUserSchema>;
export type UserJSON = z.infer<typeof jsonUserSchema>;
