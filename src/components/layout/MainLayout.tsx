import { Outlet } from 'react-router-dom'
import MainNavbar from './Navbar'

const MainLayout = () => (
  <div>
    <MainNavbar onMobileNavOpen={() => {}} />
    <div>
      <Outlet />
    </div>
  </div>
)

export default MainLayout
