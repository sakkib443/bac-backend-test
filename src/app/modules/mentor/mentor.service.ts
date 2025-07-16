
import { IMentor } from './mentor.interface';
import { Mentor } from './mentor.model';

// CREATE → নতুন Mentor তৈরি
const createMentorServices = async (payload: IMentor): Promise<IMentor> => {
  return await Mentor.create(payload);
};

// READ ALL → সব Mentor দেখা
const getAllMentorsServices = async (): Promise<IMentor[]> => {
  return await Mentor.find();
};

// READ SINGLE → নির্দিষ্ট Mentor দেখা
const getSingleMentorServices = async (id: string): Promise<IMentor | null> => {
  return await Mentor.findOne({ id });
};

// UPDATE → Mentor আপডেট
const updateMentorServices = async (
  id: string,
  payload: Partial<IMentor>
): Promise<IMentor | null> => {
  return await Mentor.findOneAndUpdate({ id }, payload, { new: true });
};

// DELETE → Mentor ডিলিট
const deleteMentorServices = async (id: string): Promise<IMentor | null> => {
  return await Mentor.findOneAndDelete({ id });
};

export const MentorService = {
  createMentorServices,
  getAllMentorsServices,
  getSingleMentorServices,
  updateMentorServices,
  deleteMentorServices,
};
