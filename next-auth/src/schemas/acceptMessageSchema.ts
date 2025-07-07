import * as z from "zod/v4";
export const acceptMessageSchema = z.object({
    acceptMessages: z.boolean(),
    
})