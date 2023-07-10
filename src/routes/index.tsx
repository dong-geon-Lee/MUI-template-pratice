import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
  return useRoutes([{ path: '/', element: <h1>첫번쨰 페이지</h1>, children: [{ path: '/', element: <></> }] }, MainRoutes]);
}
