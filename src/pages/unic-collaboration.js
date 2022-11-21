import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'
import { Paper } from '@material-ui/core'
import Fade from 'react-reveal/Fade'
const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    color: '#bc923d',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: '31px',
    letterSpacing: '0.08em',
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
      lineHeight: '71px',
    },
  },
  munTextProperty: {
    fontWeight: 'bold',
    color: theme.palette.font.primary,
    letterSpacing: '0.08em',
    fontSize: '24px',
    lineHeight: '58px',
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
    },
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  agendasHeading:{
    fontSize:'30px',
  },
  paper: {
    backgroundColor: theme.palette.background.lightPinkish,
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
    width: '70vw',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      width: '97vw',
    },
  },
}))

function UNIC() {
  const classes = useStyles()
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet></Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.headingTextProperty}
        >
          {/* COLLABORATION WITH UNIC */}
          ZERO HOUR SUMMIT
        </Typography>
        {/* <Typography variant='h5' className={classes.munTextProperty}>
          JECRC MUN 2022
        </Typography> */}
      </Banner>
      <Grid className={classes.container} justify='center'>
        <Paper elevation={5} className={classnames([classes.paper])}>
          <Typography
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: theme.palette.primary.main,
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {/* UNIC */}
            ZERO HOUR SUMMIT
          </Typography>
          <Grid container justify='center' className='p-4'>
            <Grid item md={10}>
              <Fade bottom cascade>
                <Typography className='text-justify py-5'>
                  {/* JECRC MUN 2022 is now in collaboration with the United Nations
                  Information Centre (UNIC) for India and Bhutan. The United
                  Nations Information Centre for India and Bhutan is based in
                  New Delhi, India and is one of 63 United Nations Information
                  Centres established worldwide.The United Nations Information
                  Centre for India and Bhutan performs an essential role in
                  broadcasting and communicating information from the United
                  Nations to India and Bhutan. */}
                  The Zero Hour Summit aims to center the voices of our college youth in the conversation about national and international issues and environmental justice. We intend to develop a discussion platform for topics of public interest that requires urgent attention.
                  Zero Hour Summit is going to be an in-house debate competition that is bound to discuss 4 agendas. Agendas do not matter to a man without thought but torture the hearts of people who actively think about this world we live in.
                  With these debates, we aim to move our students towards constant growth and development in thinking, research, and speaking skills, and the ability to have a sound opinion about matters of interest.
                </Typography>
                {/* <Typography className='text-justify py-5'>
                  It interprets the information in the regional languages of
                  India including Hindi, Tamil, and Telugu to create
                  communication easier and more convenient. It maintains
                  off-line resources such as libraries and also looks after
                  digital information resources. The collaboration of JECRC MUN
                  2022 and UNIC will prove to be remarkably beneficial for the
                  delegates.
                </Typography>
                <Typography className='text-justify py-5'>
                  The logo of UNIC will be used on the certification which will
                  help all the delegates in future by increasing the credibility
                  and brand value of the conference. Participating delegates can
                  put their skills to test in some of the most exciting and
                  interesting global agendas. With this new edition of JECRC
                  MUN, we promise an outstanding level of debate and
                  deliberation, innovative committees and an extraordinary
                  experience for all.
                </Typography> */}
              </Fade>
            </Grid>
          </Grid>
          <Typography
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: theme.palette.primary.main,
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Agendas
          </Typography>
          <Grid container justify='center' className='p-4'>
            <Grid item md={10}>
              <Fade bottom cascade>
                <Typography className='text-justify py-5'>
                <h1 className={classes.agendasHeading}>RESERVATION SYSTEM IN INDIA</h1>
                <br />
                Since its establishment, Reservation System in the country has played a major role in every field, from education to jobs. While playing a beneficial role in equalling the field for all the communities and providing opportunities to the underprivileged, the system has also become a curse for the rest of the community and the nation itself. 
This agenda deals with the two faces of our reservation system- deciding whether it’s a gift that should be savored or a bane that should be abolished for the future of our citizens and the country. 
                </Typography>
                <Typography className='text-justify py-5'>
                <h1 className={classes.agendasHeading}>INTERNET PRIVACY RIGHTS</h1>
                <br />
                With the Internet now available in every nook and corner of the world, it raises a vital question for everyone- the privacy of data. Although sharing of data to websites and their parent companies makes it easier to get recommendations and gives it a more personalized look, leaks of personal information can cause both physical and mental anguish to the users. 
This agenda is a take on both the positive and negative aspects of how the privatization of data to the users themselves would affect them for better or for worse.
                </Typography>
                <Typography className='text-justify py-5'>
                <h1 className={classes.agendasHeading}>MILLENNIALS VS GEN Z</h1>
                <br />
                The tech-savvy, the hard worker, the smart worker, the multi-tasker, the innovator, the financially stable, the flexible, etc. Two generations separated from each other by the many aspects of life. Millennials (born between 1982 and 2000) and Gen Z (born between 2001 and 2019), have different opinions and places in their lives due to technology, education, self-identity, society, upbringing, communication, and emotions. 
The agenda raises a series of queries and aspects to marvel on- which side are you on?
                </Typography>
                <Typography className='text-justify py-5'>
                <h1 className={classes.agendasHeading}>A WORLD WITH AI</h1>
                <br />
                Artificial intelligence is a new and up-and-coming technology capable of changing the world as we know it. It is the simulation of human intelligence processed by machines that can be the cause of mass destruction, a robot uprising, or the settlement of a new and improved civilization. This revolution in technology would impact us all, for good or bad. This agenda gives the participants an opportunity to debate on topics such as human error, new inventions, the high cost of creation, unemployment, technology improvement, human activity, and so on.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Wrapper>
  )
}

export default UNIC
