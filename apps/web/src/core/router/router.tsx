import { createBrowserRouter } from 'react-router'

import RootLayout from '@/core/router/layouts/root-layout'
import { dashboardRoutes } from '@/modules/dashboard'

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      ...dashboardRoutes,
    ],
  },
])
