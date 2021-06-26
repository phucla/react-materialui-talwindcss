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
      <div className="pl-10 flex mx-auto pt-100">
        <div className="pl-10 ml-10 flex-auto overflow-scroll pt-84">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
