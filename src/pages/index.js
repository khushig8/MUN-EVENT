import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import About from '../components/sections/home/about'
import ChiefGuest from '../components/sections/home/ourChiefGuest'
// import Registrations from '../components/sections/home/registrations'
import HomeBlogs from '../components/sections/home/blogs'
import Committees from '../components/sections/home/committees'
// import Countdown from '../components/countdown'
import CoronaWarning from '../components/sections/home/postpone-notice'
import VideoDialog from '../components/sections/home/videoDialog'
// import Fab from '@material-ui/core/Fab'
// import PlayIcon from '@material-ui/icons/PlayArrowSharp'
import useMediaQuery from '@material-ui/core/useMediaQuery'
// import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
// import LocationIcon from '@material-ui/icons/PlaceOutlined'
import classnames from 'classnames'
import MunExcellencies from '../components/sections/home/munExcellencies'
import Ambassador from '../components/sections/home/ambassador'
import ExecutiveBoard from '../components/sections/home/eb'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  munLogo: {
    height: '300px',
    paddingTop: '50px',
    paddingBottom: '25px',
    [theme.breakpoints.down('lg')]: {
      height: '230px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  munTextProperty: {
    // color: theme.palette.primary.main,
    color: '#bc923d',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
    letterSpacing: '0.08em',
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '58px',
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
    },
  },
  registrationLink:{
    color: '#bc923d',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '90px',
    [theme.breakpoints.up('md')]: {
      fontSize: 50,
    },
  },
  FontInfo: {
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
    },
  },
}))

export default () => {
  const [openVideoDialog, setVideoDialogOpen] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:640px)')
  const logoMatches = useMediaQuery('(min-height:600px)')
  const {
    image,
    chiefGuestImage,
    blogsImage,
    ambassadorImage,
  } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/bg.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chiefGuestImage: file(relativePath: { eq: "banners/chief-guest.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blogsImage: file(relativePath: { eq: "banners/blogs.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ambassadorImage: file(relativePath: { eq: "banners/ambassador.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const handleOpenVideoDialog = () => {
    setVideoDialogOpen(!openVideoDialog)
  }

  return (
    <Wrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        className='flex flex-col justify-center item-center'
        minHeight
        height='auto'
      >
        {logoMatches && (
          <Fade top>
            <img
              src='images/White-MUN-LOGO.png'
              className={classnames(['mx-auto mt-10 w-auto', classes.munLogo])}
              alt='logo'
            />
          </Fade>
        )}
        {/* <div className='self-start self-center'>
          {matches && <Countdown date='11 April 2022 09:00:000 GMT+05:30' />}
        </div> */}
        <div className='my-5'>
          <Typography className={classes.munTextProperty}>
            JECRC MUN
          </Typography>
          <Typography style={{marginBottom:"30px"}} className={classes.diplomacyTextProperty}>
            <a href="/unic-collaboration"> Presents Zero Hour Summit</a>
          </Typography>
          <Typography className={classes.registrationLink}>
          Awaken The Leader In You
          </Typography>
        </div>
        <a href="https://forms.gle/ZNB4RGyQSLb7yerf7" target="_blank"><div>
          <CoronaWarning />
        </div></a>
        {/* <div className='my-5'>
          <Typography
            className={classnames('text-white', classes.FontInfo)}
            variant='h6'
          >
            <LocationIcon color='primary' /> Jaipur Engineering College and
            Research Center, Jaipur
          </Typography>
          <Typography
            className={classnames('text-white', classes.FontInfo)}
            variant='h6'
          >
            <CalendarIcon color='primary' /> 11th - 12th April 2022
          </Typography>
        </div> */}
        <div>
          {/* <Fab color='primary' size='large' onClick={handleOpenVideoDialog}>
            <PlayIcon fontSize='large' />
          </Fab> */}
          <VideoDialog
            open={openVideoDialog}
            handleOpen={handleOpenVideoDialog}
          />
        </div>
      </Banner>
      <div
        id='about'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <About />
      </div>
      <div id='ambassador' className='flex flex-wrap justify-center'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            ambassadorImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-3'>
            <MunExcellencies />
          </div>
          <div className='py-3'>
            <Ambassador />
          </div>
        </Banner>
      </div>
      {/* <div
        id='registrations'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <Registrations />
      </div> */}
      <div
        id='committees'
        // id='executive-board'
        className='pt-10'
        style={{
          minHeight: '40vh',
          background: theme.palette.background.pinkish,
        }}
      >
          <Committees />
        {/* <ExecutiveBoard /> */}
      </div>
      <div className='flex flex-wrap justify-center h-auto' id='chief-guest'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            chiefGuestImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-10'>
            <ChiefGuest />
          </div>
        </Banner>
      </div>
      {/* <div
        id='resources'
        className='pt-10'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <HomeBlogs />
      </div> */}
      {/* <div id='committees' className='flex flex-wrap justify-center h-auto'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            blogsImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-10'>
            <Committees />
          </div>
        </Banner>
      </div> */}
      {/* <div
        id='committees'
        // id='executive-board'
        className='pt-10'
        style={{
          minHeight: '40vh',
          background: theme.palette.background.pinkish,
        }}
      >
          <Committees />
        <ExecutiveBoard />
      </div> */}
    </Wrapper>
  )
}
