import { ICategory } from "./courseCategory.interface";
import { Category } from "./courseCategory.model";


// CREATE → নতুন category তৈরি করে
const createCategoryServices = async (payload: ICategory): Promise<ICategory> => {
  const newCategory = await Category.create(payload);
  return newCategory;
};

// READ → সব category নিয়ে আসে
const getAllCategoriesServices = async (): Promise<ICategory[]> => {
  const categories = await Category.find({});
  return categories;
};

// READ → একক category আইডি দিয়ে নিয়ে আসে
const getSingleCategoryServices = async (id: number): Promise<ICategory | null> => {
  const category = await Category.findOne({ id });
  return category;
};

// UPDATE → category আপডেট করে আইডি দিয়ে
const updateCategoryServices = async (
  id: number,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const updatedCategory = await Category.findOneAndUpdate({ id }, payload, { new: true });
  return updatedCategory;
};

// DELETE → category ডিলিট করে (বা soft delete দিলে সেখানে লজিক দেবেন)
const deleteCategoryServices = async (id: number): Promise<ICategory | null> => {
  const deletedCategory = await Category.findOneAndDelete({ id });
  return deletedCategory;
};

export const CategoryService = {
  createCategoryServices,
  getAllCategoriesServices,
  getSingleCategoryServices,
  updateCategoryServices,
  deleteCategoryServices,
};
