import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import CloseSharp from '@material-ui/icons/CloseSharp'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CollapseDropDown from './collapse'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import { Link } from 'gatsby'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  headerItems: {
    paddingBottom: 0,
    color: '#FFF',
    paddingTop: 0,
    textTransform: 'uppercase',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 'auto',
    backgroundColor: '#bc923d',
    color: theme.palette.primary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
  close: {
    color: '#FFF',
  },
  listItem: {
    padding: 8,
    paddingLeft: 16,
  },
}))

function MobileViewDrawer(props) {
  const classes = useStyles()
  const [openDropDown, setOpenDropDown] = React.useState(false)
  const [openFor, setOpenFor] = React.useState('')

  const handleOpen = openFor => {
    setOpenDropDown(true)
    setOpenFor(openFor)
  }

  const handleDropDownClose = () => {
    setOpenDropDown(false)
  }

  const { handleDrawerClose, open } = props
  const drawerData = [
    { name: 'HOME', link: '/' },
    {
      name: 'ABOUT',
      link: '/#about',
      items: [
        { name: 'JECRC MUN', to: '/about' },
        // { name: 'OUR CHIEF GUEST', to: '/#chief-guest' },
        { name: 'OUR SPONSORS', to: '/sponsors' },
        { name: 'Zero Hour Summit', to: '/unic-collaboration' },
        // { name: 'OUR CHIEF GUEST', to: '/#chief-guest' },
        // {
        //   name: 'EXECUTIVE BOARD',
        //   to: '/#executive-board',
        // },
      ],
    },
    { name: 'COMMITTEES', link: '/#committees' },
    {name: 'REGISTRATIONS', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqSZnKyU5NEQlJZyGJELyEIc5JDOF93KpigiiS9lD-vGVE9Q/viewform'},
    // { name: 'RESOURCES', link: '/#resources' },
    { name: 'GALLERY', link: '/gallery' },
    { name: 'TEAM', link: '/ot' },
    { name: 'CONTACT', link: '/contact' },
  ]
  useEffect(() => {
    if (!open) handleDropDownClose()
  }, [open])
  return (
    <Drawer
      variant='temporary'
      anchor='right'
      open={open}
      onClose={handleDrawerClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose} className={classes.close}>
          <CloseSharp className={classes.close} />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.headerItems}>
        {drawerData.map((text, index) => (
          <div key={index}>
            <ListItem
              button
              component={Link}
              to={text.link}
              className={classes.listItem}
            >
              <ListItemText primary={text.name} />
              {/* Add 'REGISTERATIONS' in below array like ABOUT for adding registerations in mobile view*/}
              {['ABOUT'].includes(text.name) ? (
                openDropDown && text.name === openFor ? (
                  <ExpandLess onClick={handleDropDownClose} />
                ) : (
                  <ExpandMore
                    value={text.name}
                    onClick={() => handleOpen(text.name)}
                  />
                )
              ) : null}
            </ListItem>
            {openFor === text.name ? (
              <CollapseDropDown
                openDropDown={openDropDown}
                handleDrawerClose={handleDrawerClose}
                listOfItems={text.items}
                handleDropDownClose={handleDropDownClose}
              />
            ) : null}
          </div>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default MobileViewDrawer
