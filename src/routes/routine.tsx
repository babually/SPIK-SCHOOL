import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const routineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/routine',
  component: () => <div>Routine Page</div>,
});