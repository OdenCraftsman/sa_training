import { QueryClientProvider } from './QueryClientProvider';
import { RouterProvider } from './RouterProvider';

export const GlobalProvider: React.FC = () => {
  return (
    <QueryClientProvider>
      <RouterProvider />
    </QueryClientProvider>
  );
};
