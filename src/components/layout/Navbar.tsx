import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { AppBar, Badge, Box, IconButton, Toolbar } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import { authActions } from 'screens/auth/authSlice'
import { useDispatch } from 'react-redux';

type DashboardNavbarProps = {
  onMobileNavOpen: () => void
}

const DashboardNavbar = ({ onMobileNavOpen }: DashboardNavbarProps) => {
  const [notifications] = useState([])
	const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <AppBar elevation={0}>
      <Toolbar className="justify-between">
        <RouterLink to="/">
          <h1>Logo</h1>
        </RouterLink>
        <Box />

        <Box>
        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleLogout}>
          <InputIcon />
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardNavbar
