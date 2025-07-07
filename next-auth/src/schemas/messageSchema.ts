import * as z from "zod/v4";
export const messageSchema = z.object({
    content: z
    .string()
    .min(10,{message:'content must be at least 10 characters'})
    .max(300,{message:'content must be no longer than 300 characters'})
    
})