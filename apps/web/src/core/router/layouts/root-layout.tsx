import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <>
      <div>Header</div>
      <div>Sidebar</div>
      <Outlet />
      <div>Footer</div>
    </>
  )
}
