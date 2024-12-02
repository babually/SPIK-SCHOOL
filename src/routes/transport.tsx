import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const transportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transport',
  component: () => <div>Transport Page</div>,
});