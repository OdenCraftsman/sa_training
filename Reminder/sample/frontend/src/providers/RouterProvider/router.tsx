import IndexPage from '@/pages/index';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    children: [],
  },
  {
    path: 'dashboard',
    element: <div>dashboard のコンポーネントを作成してください</div>,
  },
  {
    path: 'about',
    element: <div>about のコンポーネントを作成してください</div>,
  },
]);
