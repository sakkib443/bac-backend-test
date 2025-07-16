import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { UserRoutes } from './app/modules/user/user.route';
import { StudentRoutes } from './app/modules/student/student.route';
import { MentorRoutes } from './app/modules/mentor/mentor.routes';
import { CourseRoutes } from './app/modules/courses/course.routes';
import { CategoryRoutes } from './app/modules/courseCategory/courseCategory.routes';


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', UserRoutes);
app.use('/api/students', StudentRoutes);
app.use('/api/mentors', MentorRoutes);
app.use('/api/courses', CourseRoutes);
app.use('/api/categories', CategoryRoutes);

// fixed route
const getAController = (req: Request, res: Response) => {
  const a = 'Server is running successfully';
  res.status(200).json({ a });
};

app.get('/', getAController);

export default app;
