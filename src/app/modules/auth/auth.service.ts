import { User } from '../user/user.model';
import { comparePassword } from '../../utils/bcrypt';
import { generateToken } from '../../utils/jwt';

export const loginService = async (id: string, password: string) => {
  const user = await User.findOne({ id });
  if (!user || user.isDeleted) throw new Error('User not found or deleted');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const token = generateToken({ id: user.id, role: user.role });
  return { accessToken: token };
};