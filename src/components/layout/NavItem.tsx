import { memo } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Button, ListItem } from '@material-ui/core'
import MenuBook from '@material-ui/icons/MenuBook'

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
        to={href}
      >
        <MenuBook className="px-10" />
        <span>{title}</span>
      </Button>
    </ListItem>
  )
}

export default memo(NavItem)
