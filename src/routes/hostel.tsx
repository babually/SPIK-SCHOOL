import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const hostelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hostel',
  component: () => <div>Hostel Page</div>,
});