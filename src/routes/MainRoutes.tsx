import MainLayout from 'layout/MainLayout';
import DashboardDefault from 'pages/dashboard/default';

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <>
          <MainLayout />
        </>
      ),
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              // element: <></>
              element: <DashboardDefault />
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
