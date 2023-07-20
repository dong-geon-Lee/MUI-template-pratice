import MainLayout from 'layout/MainLayout';
import DashboardDefault from 'pages/dashboard/default';

import AppInvoiceCreate from 'pages/apps/invoice/create';
import AppInvoiceDashboard from 'pages/apps/invoice/dashboard';
import AppInvoiceList from 'pages/apps/invoice/list';
import AppInvoiceDetails from 'pages/apps/invoice/details';
import AppInvoiceEdit from 'pages/apps/invoice/edit';

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
              element: <DashboardDefault />
            }
          ]
        },
        {
          path: 'apps',
          children: [
            {
              path: 'invoice',
              children: [
                {
                  path: 'dashboard',
                  element: <AppInvoiceDashboard />
                },
                {
                  path: 'create',
                  element: <AppInvoiceCreate />
                },
                {
                  path: 'details/:id',
                  element: <AppInvoiceDetails />
                },
                {
                  path: 'edit/:id',
                  element: <AppInvoiceEdit />
                },
                {
                  path: 'list',
                  element: <AppInvoiceList />
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
