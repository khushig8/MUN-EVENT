import React, { useState } from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import {
  makeStyles,
  Typography,
  useTheme,
  Button,
  CircularProgress,
} from '@material-ui/core'
import sponsorsData from '../data/sponsors-data'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ContentBox from '../components/content-box'
import InputField from '../components/input-field'
import FormCompleted from '../components/form-completed'
import classnames from 'classnames'
// import GetAppIcon from '@material-ui/icons/GetApp'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    color: '#bc923d',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: '50px',
    letterSpacing: '0.08em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
      lineHeight: '71px',
    },
  },
  munTextProperty: {
    fontWeight: 'bold',
    color: theme.palette.font.primary,
    letterSpacing: '0.08em',
    fontSize: '20px',
    lineHeight: '40px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
      lineHeight: '58px',
    },
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
  borderStyle: {
    border: '5px solid #bc923d',
    width: 270,
    [theme.breakpoints.up('xl')]: {
      width: 400,
      height: 200,
    },
  },
  textStyle: {
    color: '#bc923d',
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '700px',
  },
  smallLabel: {
    fontSize: '0.9rem',
  },
  // button: {
  //   width: 200,
  //   height: 65,
  //   backgroundColor: '#2b5ec5',
  //   color: '#fff',
  // },
}))

function SponsorsForm() {
  const classes = useStyles()
  const organization = useForm('')
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const altContact = useForm('')
  const subject = useForm('')
  const message = useForm('')

  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    fetch(
      'https://sheetdb.io/api/v1/d3z82u6ubns09',
      // goes to https://docs.google.com/spreadsheets/d/1WB7KGJGi80VrNhbol7eEWF96n8W7Ve4XWmil1l8mj5I/edit#gid=0
      {
        method: 'POST',
        body: new FormData(form),
      },
    )
      .then(res => {
        setLoading(false)
        setCompleted(true)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
        setError(true)
      })
  }
  return (
    <div>
      {completed ? (
        <FormCompleted />
      ) : (
        <Fade bottom>
          <ContentBox className='m-16'>
            <Typography variant='h6' style={{ color: '#bc923d',fontSize:"40px" }}>
              Become Our Sponsor
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <InputField
                required
                label='Name of the Organization'
                name='organization'
                {...organization}
              />
              <InputField
                required
                label='Full Name'
                autoComplete='name'
                name='fullName'
                {...fullName}
              />
              <InputField
                required
                label='Email ID'
                type='email'
                name='email'
                {...email}
              />
              <InputField
                required
                label='Contact No.'
                type='tel'
                name='contact'
                {...contact}
              />
              <InputField
                label='Alternative Contact No.'
                type='tel'
                name='altContact'
                {...altContact}
              />
              <InputField
                required
                label='Subject'
                name='subject'
                rowsMax={6}
                {...subject}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <InputField
                label='Message'
                name='message'
                multiline
                rowsMax={6}
                {...message}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <div className='mt-6 text-center'>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    size='large'
                  >
                    Submit
                  </Button>
                )}
                <div>
                  {error ? (
                    <Typography variant='h6' component='p' color='error'>
                      Cannot submit form. Please refresh the page and try again.
                    </Typography>
                  ) : null}
                </div>
              </div>
            </form>
          </ContentBox>
        </Fade>
      )}
    </div>
  )
}

function Sponsors(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/sponsor.JPG" }) {
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
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
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
          OUR PREVIOUS SPONSORS
        </Typography>
        <Typography className={classes.munTextProperty} variant='h5'>
          JECRC MUN 2022
        </Typography>
      </Banner>
      <Grid
        className={classnames([
          'flex flex-col justify-center items-center',
          classes.container,
        ])}
        // fluid={bgImage.sharp.fluid}
        // durationFadeIn={50}
      >
        <div className='py-5 flex flex-wrap justify-center'>
          <Fade bottom cascade>
            {sponsorsData.map((sponsor, index) => {
              return (
                <div key={index}>
                  <img
                    src={`/images/${sponsor}.png`}
                    alt={sponsor}
                    className={`bg-white h-40 p-5 m-8 ${classes.borderStyle}`}
                  />
                </div>
              )
            })}
          </Fade>
        </div>
        {/* <div className='flex justify-center'>
          <Button variant='contained' className={classes.button}>
            <div className='flex justify-center'>
              <GetAppIcon />
            </div>
            <Typography>SPONSORSHIP BROCHURE</Typography>
          </Button>
        </div> */}
        <SponsorsForm />
      </Grid>
    </Wrapper>
  )
}

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }
  return { value, onChange: handleChange }
}

export default Sponsors
