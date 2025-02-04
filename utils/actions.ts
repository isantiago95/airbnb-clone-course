"use server";

import { profileSchema } from "./schemas";
import * as z from "zod";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log({ validatedFields });

    return { message: "profile created" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: error.errors.map(
          ({ message, path }) => `error on ${path}: ${message}`
        ),
      };
    }

    return { message: "An unknown error occurred" };
  }
};
