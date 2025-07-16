import { Course } from './course.model';
import { ICourse } from './course.interface';



// CREATE → নতুন কোর্স তৈরি করার সার্ভিস
const createCourseServices = async (payload: ICourse): Promise<ICourse> => {


  // ৩. যদি mentor ও category উভয়টাই থাকে, তাহলে কোর্স তৈরি করা হবে
  const newCourse = await Course.create(payload);
  return newCourse;
};


// READ → সব কোর্স রিটার্ন করে (mentor ও category সহ)
const getAllCoursesServices = async (): Promise<ICourse[]> => {
  const courses = await Course.find({})
  return courses;
};


// READ (SINGLE) → একটি নির্দিষ্ট কোর্স রিটার্ন করে (mentor ও category সহ)
const getSingleCourseServices = async (id: number): Promise<ICourse | null> => {
  const course = await Course.findOne({ id })
    .populate('mentor')
    .populate('category');
  return course;
};


// UPDATE → নির্দিষ্ট কোর্স আপডেট করার সার্ভিস
const updateCourseServices = async (id: number, payload: Partial<ICourse>): Promise<ICourse | null> => {
  const updatedCourse = await Course.findOneAndUpdate({ id }, payload, { new: true })
    .populate('mentor')
    .populate('category');
  return updatedCourse;
};


// DELETE → নির্দিষ্ট কোর্স ডিলিট করার সার্ভিস
const deleteCourseServices = async (id: number): Promise<ICourse | null> => {
  const deletedCourse = await Course.findOneAndDelete({ id })
    .populate('mentor')
    .populate('category');
  return deletedCourse;
};


// সব সার্ভিস এক্সপোর্ট করা হচ্ছে
export const CourseService = {
  createCourseServices,
  getAllCoursesServices,
  getSingleCourseServices,
  updateCourseServices,
  deleteCourseServices,
};
