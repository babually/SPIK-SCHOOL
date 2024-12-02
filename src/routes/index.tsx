import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import Dashboard from '../components/Dashboard';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});