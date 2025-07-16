import { z } from 'zod';

// 📌 Zod Schema for Mentor Validation
export const mentorValidationSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
  }),
  dateOfBirth: z.string().min(1, { message: 'Date of Birth is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContact: z
    .string()
    .min(1, { message: 'Emergency contact is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  profileImg: z.string().url({ message: 'Valid image URL required' }),
  designation: z.string().min(1, { message: 'Designation is required' }),
  departmentName: z.string().min(1, { message: 'Department name is required' }),
  specialized_area: z
    .array(z.string())
    .nonempty({ message: 'At least one specialized area is required' }),
  education_qualification: z
    .array(z.string())
    .nonempty({ message: 'At least one qualification is required' }),
  workExperience: z
    .array(z.string())
    .nonempty({ message: 'At least one work experience is required' }),
  experienceYears: z
    .string()
    .min(1, { message: 'Experience years required' }),
  experienceTrainedStudents: z
    .string()
    .min(1, { message: 'Experience with trained students is required' }),
  reviews: z.number().nonnegative({ message: 'Review must be 0 or more' }),
  bio: z.string().min(1, { message: 'Bio is required' }),
  lifeJourney: z.string().min(1, { message: 'Life journey is required' }),
});
