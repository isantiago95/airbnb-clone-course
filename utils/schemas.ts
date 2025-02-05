import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters long",
  }),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters long",
  }),
  username: z.string().min(3, {
    message: "username must be at least 3 characters long",
  }),
});

export function validatewithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map(({ message }) => message);
    throw new Error(errors.join(`, `));
  }

  return result.data;
}
