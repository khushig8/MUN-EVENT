import React from 'react'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import MaterialLink from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  headerItems: {
    color: '#fff',
    fontWeight: 'bold',
    // fontFamily: "'Rubik', sans-serif",
    textTransform: 'uppercase',
    position: 'relative',
  },
  navItem: {
    '& > h6::after, & > a::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '0',
      border: `2px solid #2b5ec5`,
      height: 0,
      width: '100%',
      transform: `scaleX(0)`,
      transition: `transform 0.3s ease-out`,
    },
    '&:hover >h6::after, &:hover > a::after': {
      transform: `scaleX(1)`,
    },
  },
  list: {
    display: 'inline-flex',
    paddingTop: 0,
    paddingBottom: 0,
    height: '100%',
  },
}))

const dropdownList = {
  about: [
    { name: 'JECRC MUN', link: '/about', type: 'gatsby' },
    // { name: 'OUR CHIEF GUEST', link: '/#chief-guest', type: 'gatsby' },
    { name: 'OUR SPONSORS', link: '/sponsors', type: 'gatsby' },
    // { name: 'EXECUTIVE BOARD', link: '/#executive-board', type: 'gatsby' },
  ],
  registrations: [
    {
      name: 'DELEGATE REGISTRATIONS',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSf8EXD-yKBdDvqKGilqTQDUKKOm0kwdfL9GAtylRQz3lrOIeA/viewform',
      type: 'gatsby',
    },
    {
      name: 'INTERNATIONAL PRESS',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdMZUCrpFIuo5W2HM9aBuobMDWB2rsJd9h7X2yy3wdejOmnqg/viewform',
      type: 'gatsby',
    },
    {
      name: 'CAMPUS AMBASSADOR',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfbluEFfuuVkH0xc0xlxBFJNAin5s4fB1ajArcBSe9OyCk0fw/viewform',
      type: 'gatsby',
    },
    {
      name: 'EXECUTIVE BOARD',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfbluEFfuuVkH0xc0xlxBFJNAin5s4fB1ajArcBSe9OyCk0fw/viewform',
      type: 'gatsby',
    },
    // {
    //   name: "IT'S DEBATABLE",
    //   link: '/its-debatable',
    //   type: 'gatsby',
    // },
  ],
}

const useDropdownStyles = makeStyles(theme => ({
  downBarList: {
    position: 'absolute',
    top: '100%',
    left: '0',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#fff', // will change this in future
    color: '#2b5ec5',
    border: `1px solid #2b5ec5`,
  },
  downBarListItem: {
    '&:not(:last-of-type)': {
      borderBottom: `1px solid #2b5ec5`,
    },
    '&:hover': {
      background: '#2b5ec5',
      color: '#fff',
    },
  },
}))

function Dropdown({ name, handleClose }) {
  const menuList = dropdownList[name]
  const classes = useDropdownStyles()
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <MenuList className={classes.downBarList}>
        {menuList.map(({ name, link, type }) => (
          <MenuItem
            key={name}
            onClick={handleClose}
            className={classes.downBarListItem}
            component={type === 'gatsby' ? Link : MaterialLink}
            to={link}
          >
            <Typography variant='subtitle2'>{name}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </ClickAwayListener>
  )
}
function NavBarWeb(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [current, setCurrent] = React.useState('')

  function handleOnMouse(name) {
    setCurrent(name)
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <List component='div' className={classes.list}>
      <ListItem component={Link} to='/' className={classes.navItem}>
        <Typography
          variant='subtitle2'
          color='inherit'
          className={classes.headerItems}
        >
          Home
        </Typography>
      </ListItem>
      <ListItem
        component='div'
        onMouseLeave={handleClose}
        onMouseOver={e => handleOnMouse('about')}
        onFocus={e => handleOnMouse('about')}
        className={classes.navItem}
      >
        <Typography
          component={MaterialLink}
          underline='none'
          href='/#about'
          variant='subtitle2'
          className={classes.headerItems}
        >
          About
        </Typography>
        {open && current === 'about' && (
          <Dropdown name='about' handleClose={handleClose} />
        )}
      </ListItem>
      <ListItem
        component='div'
        onMouseLeave={handleClose}
        onMouseOver={e => handleOnMouse('registrations')}
        onFocus={e => handleOnMouse('registrations')}
        className={classes.navItem}
      >
        <Typography
          component={MaterialLink}
          href='/#registrations'
          underline='none'
          variant='subtitle2'
          className={classes.headerItems}
        >
          Registrations
        </Typography>
        {/* {open && current === 'registrations' && (
          <Dropdown name='registrations' handleClose={handleClose} />
        )} */}
      </ListItem>
      {/* <ListItem
        component={MaterialLink}
        underline='none'
        href='/#resources'
        className={classes.navItem}
      >
        <Typography variant='subtitle2' className={classes.headerItems}>
          Resources
        </Typography>
      </ListItem> */}
      <ListItem component={Link} to='/#committees' className={classes.navItem}>
        <Typography variant='subtitle2' className={classes.headerItems}>
          Committees
        </Typography>
      </ListItem>
      <ListItem component={Link} to='/gallery' className={classes.navItem}>
        <Typography variant='subtitle2' className={classes.headerItems}>
          Gallery
        </Typography>
      </ListItem>
      <ListItem component={Link} to='/ot' className={classes.navItem}>
        <Typography variant='subtitle2' className={classes.headerItems}>
         Team
        </Typography>
      </ListItem>
      <ListItem component={Link} to='/contact' className={classes.navItem}>
        <Typography variant='subtitle2' className={classes.headerItems}>
          Contact
        </Typography>
      </ListItem>
    </List>
  )
}

export default NavBarWeb
