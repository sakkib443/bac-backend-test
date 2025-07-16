/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { loginService } from './auth.service';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { id, password } = req.body;
    const result = await loginService(id, password);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(401).json({ success: false, message: error.message });
  }
};