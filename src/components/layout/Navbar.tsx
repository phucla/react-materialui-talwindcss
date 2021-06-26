import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { AppBar, Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'

type DashboardNavbarProps = {
  onMobileNavOpen: () => void
}

const DashboardNavbar = ({ onMobileNavOpen }: DashboardNavbarProps) => {
  const [notifications] = useState([])

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <h1>Logo</h1>
        </RouterLink>
        <Box />
        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardNavbar
