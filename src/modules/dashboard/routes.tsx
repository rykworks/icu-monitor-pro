import type { RouteObject } from 'react-router'

export const dashboardRoutes: RouteObject[] = [
  { index: true, lazy: async () => {
    const { default: DashboardPage } = await import('./pages/dashboard-page')
    return { Component: DashboardPage }
  } },
]
