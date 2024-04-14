import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

import { PropsWithChildren } from 'react';

export const QueryClientProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
