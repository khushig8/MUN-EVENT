import React from 'react'
import { CommitteesData } from '../../../data/committees-data'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.down('xs')]: {
      height: '250px',
    },
  },
  content: {
    width: '400px',
    margin: '3%',
    position: 'relative',
    overflowY: 'hidden',
    '&:hover > .layer': {
      opacity: 1,
      position: 'absolute',
      top: '0',
    },
    '&:hover > .text': {
      top: '25%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '1050px',
      margin: '2%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      margin: '20px auto',
      '&:hover > .text': {
        top: '20%',
      },
    },
  },
  overlay: {
    background: 'rgba(0, 59, 150, 0.7)',
    position: 'absolute',
    left: 0,
    top: '70%',
    right: 0,
    bottom: 0,
    transition: 'all 0.4s ease-in-out 0s',
  },

  bottomText: {
    position: 'absolute',
    top: '80%',
    textAlign: 'center',
    color: '#FFF',
    width: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',
    transition: 'all 0.4s ease-in-out 0s',
  },
  agenda: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
  },
}))

function Committees() {
  const classes = useStyles()
  return (
    <div className='text-center py-10 sm:py-5'>
      <Fade bottom cascade>
        <Typography variant='h4' className='pt-5 text-black'>
          {/* Committees */}
          Agendas
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-5'
          alt='---------------------'
        />

        {/* <Typography variant='h5' className='pt-5 text-black'>
          To be announced soon....
        </Typography> */}
        <Typography variant='h5' className='pt-5 text-black'>
          RESERVATION SYSTEM IN INDIA
        </Typography>
        <Typography style={{margin:"1vmax auto "}}
          className={classnames([
            'text-center  ',
            classes.content,
          ])}
        >
          JECRC MUN is a ten years old legacy established in 2012,
          making JECRC the first host of a MUN conference in Jaipur.
          Inaugurated by the eminent educationist Shri Kul Bhushan
          Kothari, JECRC MUN has spiraled out exponentially to achieve the
          pinnacle of growth. With the zealous efforts of extensive
          organizing committees over the 10 years of conducting MUN
          conferences, we have gained a lot of momentum inviting immense
          participation from across the country.
        </Typography>
        <Typography variant='h5' className='pt-5 text-black'>
        INTERNET PRIVACY RIGHTS
        </Typography>
        <Typography style={{margin:"1vmax auto "}}
          className={classnames([
            'text-center  ',
            classes.content,
          ])}
        >
          With the Internet now available in every nook and corner of the world, it raises a vital question for everyone- the privacy of data. Although sharing of data to websites and their parent companies makes it easier to get recommendations and gives it a more personalized look, leaks of personal information can cause both physical and mental anguish to the users. 
This agenda is a take on both the positive and negative aspects of how the privatization of data to the users themselves would affect them for better or for worse.
        </Typography>
        <Typography variant='h5' className='pt-5 text-black'>
        MILLENNIALS VS GEN Z
        </Typography>
        <Typography style={{margin:"1vmax auto "}}
          className={classnames([
            'text-center  ',
            classes.content,
          ])}
        >
          The tech-savvy, the hard worker, the smart worker, the multi-tasker, the innovator, the financially stable, the flexible, etc. Two generations separated from each other by the many aspects of life. Millennials (born between 1982 and 2000) and Gen Z (born between 2001 and 2019), have different opinions and places in their lives due to technology, education, self-identity, society, upbringing, communication, and emotions. 
The agenda raises a series of queries and aspects to marvel on- which side are you on?
        </Typography>
        <Typography variant='h5' className='pt-5 text-black'>
        A WORLD WITH AI        </Typography>
        <Typography style={{margin:"1vmax auto ",marginBottom:"5vmax"}}
          className={classnames([
            'text-center  ',
            classes.content,
          ])}
        >
          Artificial intelligence is a new and up-and-coming technology capable of changing the world as we know it. It is the simulation of human intelligence processed by machines that can be the cause of mass destruction, a robot uprising, or the settlement of a new and improved civilization. This revolution in technology would impact us all, for good or bad. This agenda gives the participants an opportunity to debate on topics such as human error, new inventions, the high cost of creation, unemployment, technology improvement, human activity, and so on.
        </Typography>
      </Fade>
      {/* <Grid container justify='center'>
        {CommitteesData.map(data => (
          <Grid key={data.title} item className={classes.content}>
            <img src={data.img} alt={data.img} className={classes.image} />

            <div className={classnames([classes.overlay, 'layer'])} />

            <div className={classnames([classes.bottomText, 'text'])}>
              <Typography variant='h4' className='pb-5'>
                {data.title}
              </Typography>
              <Typography className={classnames([classes.agenda, 'pb-5'])}>
                {data.agenda}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container justify='center' className='mt-8'>
        <Grid item xl={2} lg={3} md={4} sm={5} xs={10} className='px-5 py-2'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/committee'
            size='large'
            fullWidth
          >
            Committee Details
          </Button>
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={5} xs={10} className='px-5 py-2'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='https://www.google.com/url?q=https://drive.google.com/drive/folders/1CrxqSveKKzQSQuN6NGWzhmurWAM33cAD?usp%3Dsharing&sa=D&source=editors&ust=1649177236904555&usg=AOvVaw18e_hIQyMq7-KS5yuFav48'
            size='large'
            fullWidth
          >
            View Country/Profile Matrix
          </Button>
        </Grid>
      </Grid> */}
    </div>
  )
}

export default Committees
