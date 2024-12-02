import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/root';
import { indexRoute } from './routes/index';
import { adminRoute } from './routes/admin';
import { studentsRoute } from './routes/students';
import { teachersRoute } from './routes/teachers';
import { libraryRoute } from './routes/library';
import { classRoute } from './routes/class';
import { routineRoute } from './routes/routine';
import { noticeRoute } from './routes/notice';
import { transportRoute } from './routes/transport';
import { hostelRoute } from './routes/hostel';

export const routeTree = rootRoute.addChildren([
  indexRoute,
  adminRoute,
  studentsRoute,
  teachersRoute,
  libraryRoute,
  classRoute,
  routineRoute,
  noticeRoute,
  transportRoute,
  hostelRoute,
]);

export const router = createRouter({ routeTree });