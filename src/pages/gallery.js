import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'gatsby-image'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    color: '#2b5ec5',
    fontWeight: 'bold',
    fontSize: 42,
    lineHeight: '40px',
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
  imageContainer: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      width: '30.34%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  image: {
    width: '100%',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    border: `1px solid #2b5ec5`,
    borderRadius: `16px`,
    '&:hover': {
      cursor: 'pointer',
      transition: 'all 0.3s ease-in',
      opacity: 0.9,
    },
  },
  gridContainer: {
    margin: theme.spacing(4, 0),
  },
  btnStyle: {
    width: '80%',
    marginLeft: '30px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      margin: 0,
    },
  },
}))
function Gallery() {
  const classes = useStyles()
  const theme = useTheme()
  const { image, gallery } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/gallery.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        images: nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Helmet>
        {/* <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        /> */}
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
          GALLERY
        </Typography>
        <Typography className={classes.munTextProperty} variant='h5'>
          JECRC MUN 2022
        </Typography>
        <div className={classes.btnStyle}>
          <Button
            type='submit'
            color='primary'
            variant='contained'
            size='medium'
            href='https://drive.google.com/open?id=1w1f8IPEiYPZlLE6ypmIF9B7vo1p-8hRV'
            target='_blank'
          >
            Previous Year Conference Pictures
          </Button>
        </div>
      </Banner>
      <Grid
        className={classnames([
          'flex flex-col justify-center items-center',
          classes.container,
        ])}
      >
        <Grid
          container
          spacing={2}
          xs={11}
          sm={11}
          md={10}
          className={classes.gridContainer}
          justify='center'
        >
          {gallery.images.map((image, index) => (
            <Grid key={index} item className={classes.imageContainer}>
              <Fade bottom>
                <Image
                  fluid={image.sharp.fluid}
                  fadeIn={false}
                  alt='JECRC MUN Gallery'
                  className={classes.image}
                />
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Gallery
