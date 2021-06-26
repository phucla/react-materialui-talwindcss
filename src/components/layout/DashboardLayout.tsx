import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

type DashboardLayoutProps = {
  children: JSX.Element
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex">
      <Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className="flex mx-auto pt-100">
        <div className="flex-auto h-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
