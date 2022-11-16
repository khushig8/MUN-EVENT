import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { Link as GatsbyLink } from 'gatsby'
import MateriaLink from '@material-ui/core/Link'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    // background: 'images/footer-bg',
    backgroundImage: `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main}), url(/images/footer-bg.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  textStyle: { color: theme.palette.font.primary, marginTop: '2px' },
  socialIcon: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.font.primary,
      color: theme.palette.primary.main,
    },
  },
  phoneText: {
    color: '#FFF',
  },
}))

function Footer(props) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Paper className={classes.footer} square id='contact'>
      <Grid container alignContent='center'>
        <Grid
          container
          component={GatsbyLink}
          to='/'
          justify='center'
          className='my-10'
        >
          <img
            src='/images/White-MUN-LOGO.png'
            width='38px'
            className='mr-5'
            alt='MUN Logo'
          />
          <Typography
            className={classes.textStyle}
            display='inline'
            variant='h5'
          >
            JECRC MUN 2022
          </Typography>
        </Grid>
        <Grid
          container
          justify='center'
          spacing={0}
          className={classes.textStyle}
        >
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography
              variant='h6'
              style={{ color: theme.palette.primary.main }}
            >
              Address
            </Typography>
            <Typography>Shri Ram Ki Nangal,</Typography>
            <Typography>via Sitapura RIICO,</Typography>
            <Typography>Tonk Road, Jaipur</Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography
              variant='h6'
              style={{ color: theme.palette.primary.main }}
            >
              Email
            </Typography>
            <Typography>
              <MateriaLink
                className={classes.phoneText}
                href='mailto:mun@jecrc.ac.in'
              >
                mun@jecrc.ac.in
              </MateriaLink>
            </Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography
              variant='h6'
              style={{ color: theme.palette.primary.main }}
            >
              Contacts
            </Typography>
            <Typography>Vrindaa Joshi</Typography>
            <Typography>
              <MateriaLink className={classes.phoneText} href='tel:8955332841'>
                7296877859
              </MateriaLink>
            </Typography>
            {/* <Typography>Sarthak Agrawal</Typography>
            <Typography>
              <MateriaLink className={classes.phoneText} href='tel:8630072214'>
                8630072214
              </MateriaLink>
            </Typography> */}
          </Grid>
          <Grid item md={2} sm={12} xs={12} />
        </Grid>
        <Grid container justify='center' className='mb-4'>
          <Grid item xs={12}>
            <hr
              width='70%'
              className='inline-flex border-dashed'
              style={{ borderColor: theme.palette.primary.main }}
            />
          </Grid>
          <Typography
            className={classnames(['text-center pt-1', classes.textStyle])}
          >
            This site is maintained &amp; developed by{' '}
            <a href='/team'>JECRC MUN Technical Team</a>
          </Typography>
        </Grid>
        <Grid container justify='center' className='mb-2'>
          <Avatar
            component='a'
            href='https://facebook.com/jecrcmun'
            target='_blank'
            className={classnames(['m-2', classes.socialIcon])}
          >
            <FacebookIcon />
          </Avatar>
          <Avatar
            component='a'
            href='https://instagram.com/jecrcmun'
            target='_blank'
            className={classnames(['m-2', classes.socialIcon])}
          >
            <InstagramIcon />
          </Avatar>
          <Avatar
            component='a'
            href='https://twitter.com/jecrcmun'
            target='_blank'
            className={classnames(['m-2', classes.socialIcon])}
          >
            <TwitterIcon />
          </Avatar>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
