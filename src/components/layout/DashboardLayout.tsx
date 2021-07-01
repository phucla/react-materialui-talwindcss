import { useState } from 'react'
import { useSelector } from 'react-redux'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Auth } from 'types'

type DashboardLayoutProps = {
  children: JSX.Element
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const authStore = useSelector((state: Auth) => state.auth)
  const { auth_token } = authStore || {}

  return (
    <div className="flex">
      {auth_token && (
        <>
          <Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
          <Sidebar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        </>
      )}
      
      <div className="pl-10 flex mx-auto pt-100">
        <div className="pl-10 ml-10 flex-auto pt-84">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
