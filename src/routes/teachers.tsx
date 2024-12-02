import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const teachersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/teachers',
  component: () => <div>Teachers Page</div>,
});