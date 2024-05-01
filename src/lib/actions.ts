"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const searchSchema = z.object({
  query: z
    .string()
    .min(5, { message: "Thesis query should be at least 5 characters long." }),
});

export type State = {
  message?: string | null;
};

export const searchThesis = async (prevState: State, formData: FormData) => {
  const validQuery = searchSchema.safeParse({
    query: formData.get("query"),
  });

  if (!validQuery.success) {
    return {
      message: "Thesis query should be at least 5 characters long.",
    };
  }

  const { query } = validQuery.data;

  redirect(`/thesis?query=${query}`);
};
