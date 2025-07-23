/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/modules/auth/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from './suth.service';


export const loginController = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUser(req.body);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || 'Login failed',
    });
  }
};
