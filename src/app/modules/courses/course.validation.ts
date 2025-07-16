import { z } from "zod";

export const courseValidationSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),

   // category কে ObjectId হিসেবে নেবে (string with length validation)
  category: z.string().min(1, "Category is required"),
  
  type: z.string().min(1, "Type is required"),
  image: z.string().url("Image must be a valid URL"),
  fee: z.string().min(1, "Fee is required"),
  rating: z.number().min(0).max(5),
  totalRating: z.number().min(0),
  totalStudentsEnroll: z.number().min(0),

  // Mentor কে ObjectId হিসেবে নেবে (string with length validation)
  mentor: z.string().min(1, "Mentor ID is required"),

  technology: z.string().min(1, "Technology is required"),
  courseStart: z.string().min(1, "Course start date is required"),
  durationMonth: z.number().min(1),
  lectures: z.number().min(1),
  totalExam: z.number().min(0),
  totalProject: z.number().min(0),
  details: z.string().min(1, "Details are required"),
  courseOverview: z.string().min(1, "Course overview is required"),
  curriculum: z.array(z.string().min(1)),
  courseIncludes: z.array(
    z.object({
      icon: z.string().min(1),
      text: z.string().min(1),
    })
  ),
  softwareYoullLearn: z.array(z.string().min(1)),
  jobPositions: z.array(z.string().min(1)),
});
