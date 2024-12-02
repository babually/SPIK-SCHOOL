import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => <div>Admin Page</div>,
});