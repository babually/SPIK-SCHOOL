import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/library',
  component: () => <div>Library Page</div>,
});