import { useEffect } from 'react'
import { Box, List } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import NavItem from './NavItem'

const items = [
  {
    href: '/app/product',
    icon: MenuIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/customers',
    icon: MenuIcon,
    title: 'Customers',
  },
]

type Props = {
  onMobileClose: () => void
  openMobile: boolean
}
const DashboardSidebar = ({ onMobileClose, openMobile }: Props) => {
  // const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [openMobile, onMobileClose])

  return (
    <Box className="w-200 pt-64 pl-20">
      <List>
        {items.map((item) => (
          <NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </List>
    </Box>
  )
}

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
}

export default DashboardSidebar
