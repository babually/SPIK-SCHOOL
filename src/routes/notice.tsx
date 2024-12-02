import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const noticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notice',
  component: () => <div>Notice Page</div>,
});