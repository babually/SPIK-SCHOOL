import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const studentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/students',
  component: () => <div>Students Page</div>,
});