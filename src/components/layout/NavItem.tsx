import { memo } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button, ListItem } from '@material-ui/core'

type NavItemProps = {
  href: string
  title: string
  icon: any
}

const NavItem = ({ href, title }: NavItemProps) => {
  // const location = useLocation()

  // const active = href
  //   ? !!matchPath(
  //       {
  //         path: href,
  //         end: false,
  //       },
  //       location.pathname
  //     )
  //   : false

  return (
    <ListItem disableGutters>
      <Button
        component={RouterLink}
        // sx={{
        //   color: 'text.secondary',
        //   fontWeight: 'medium',
        //   justifyContent: 'flex-start',
        //   letterSpacing: 0,
        //   py: 1.25,
        //   textTransform: 'none',
        //   width: '100%',
        //   ...(active && {
        //     color: 'primary.main',
        //   }),
        //   '& svg': {
        //     mr: 1,
        //   },
        // }}
        to={href}
      >
        <span>{title}</span>
      </Button>
    </ListItem>
  )
}

export default memo(NavItem)
