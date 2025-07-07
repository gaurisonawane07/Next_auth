import * as z from "zod/v4";
export const signInSchema = z.object({
    username: z.string(),
    password: z.string()
})