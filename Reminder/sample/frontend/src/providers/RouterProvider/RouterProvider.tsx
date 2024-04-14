import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { router } from './router';
import CircularProgress from '@mui/material/CircularProgress';

export const RouterProvider = () => {
  return (
    <ReactRouterProvider
      router={router}
      fallbackElement={<CircularProgress />}
    />
  );
};
