import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const classRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/class',
  component: () => <div>Class Page</div>,
});