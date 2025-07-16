import { z } from 'zod';

// Zod Validation: API তে ডাটা আসার সময় চেক করার জন্য
export const categoryValidationSchema = z.object({
  id: z.number({ required_error: "ID is required" }),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  icon: z.string().min(1, "Icon is required"),
});
