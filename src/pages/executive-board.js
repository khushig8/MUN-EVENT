import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Avatar from '@material-ui/core/Avatar'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Image from 'gatsby-image'
import Fade from 'react-reveal'
import { executives } from '../data/executive-board-data'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#2b5ec5',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
  root: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  containerCard: {
    borderRadius: '12px',
    margin: `${theme.spacing(5)}px ${theme.spacing(4)}px`,
    position: 'relative',
    maxHeight: '450px',
    '&:hover > main': {
      background: 'rgba(0, 59, 150, 0.7)',
      height: '450px',
      borderRadius: '12px',
      animation: `$mouseMoveIntoCard 900ms ${theme.transitions.easing.easeIn}`,
      [theme.breakpoints.down('xs')]: {
        height: '300px',
        animation: `$mouseMoveIntoCardSmallViewPort 700ms ${theme.transitions.easing.easeIn}`,
      },
    },
    '&:hover > p': {
      animationDelay: '800ms',
      animationFillMode: 'forwards',
      animation: `$socialIconseffect 200ms ${theme.transitions.easing.easeIn}`,
    },
    '&:hover > img': {
      filter: `brightness(0.7) drop-shadow(0 0 6px #000)`,
    },
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      maxHeight: '300px',
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    boxShadow:
      '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
  },
  blogImage: {
    width: '450px',
    height: '450px',
    transition: 'all 300ms ease-out',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '300px',
    },
    background: '#000',
    borderRadius: '12px',
  },
  bottomText: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    color: '#FFF',
    height: '120px',
    background: 'rgba(0, 59, 150, 0.7)',
    transition: 'all 600ms ease-out',
    padding: theme.spacing(0.5),
    borderRadius: '0px 0 12px 12px',
  },
  socialIconsContainer: {
    position: 'absolute',
    top: '42%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '0',
  },
  socialIcon: {
    background: 'transparent',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  icon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  '@keyframes mouseMoveIntoCard': {
    '0%': {
      height: '120px',
    },
    '100%': {
      height: '450px',
      borderRadius: '12px',
    },
  },
  '@keyframes mouseMoveIntoCardSmallViewPort': {
    '0%': {
      height: '120px',
    },
    '100%': {
      height: '300px',
      borderRadius: '12px',
    },
  },
  '@keyframes socialIconseffect': {
    '100%': {
      opacity: '1',
    },
  },
}))

function ExecutiveBoard(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  let { image, eb } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      eb: allFile(filter: { relativeDirectory: { eq: "eb" } }) {
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
  let { images: ebImages } = eb

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
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.munTextProperty}
        >
          EXECUTIVE BOARD
        </Typography>
        <Typography className='text-white' variant='h5'>
          JECRC MUN 2022
        </Typography>
      </Banner>
      <div
        className={classnames([
          classes.container,
          'flex flex-col justify-center items-center',
        ])}
      >
        <Grid container justify='center' className={classes.root}>
          <Fade cascade bottom>
            {executives.map((value, index) => (
              <Grid key={index} container className='w-full' justify='center'>
                <Grid item xs={12} className='text-center py-10'>
                  <Typography style={{ color: '#000a2a' }} variant='h4'>
                    {value.committee}
                  </Typography>
                  <img
                    src='/images/line.png'
                    className='mx-auto'
                    alt='---------------------'
                  />
                </Grid>
                {value.members.map((member, index) => (
                  <div key={index} className={classes.containerCard}>
                    <Image
                      fluid={
                        ebImages.filter(
                          image =>
                            image.sharp.fluid.src.split('/').pop() ===
                            member.image,
                        )[0].sharp.fluid
                      }
                      fadeIn={false}
                      alt='JECRC MUN eb'
                      className={classnames(['mx-auto', classes.blogImage])}
                    />

                    <Grid
                      container
                      alignItems='flex-end'
                      className={classes.bottomText}
                      component='main'
                    >
                      <div className='w-full text-center'>
                        <Typography variant='h5' className='py-2'>
                          {member.name}
                        </Typography>
                        <Typography variant='h6' className='pb-2'>
                          {member.designation}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid
                      container
                      justify='center'
                      className={classnames([
                        'mb-2',
                        classes.socialIconsContainer,
                      ])}
                      component='p'
                    >
                      <Avatar
                        component='a'
                        href='https://instagram.com/jecrcmun'
                        target='_blank'
                        className={classnames(['m-2', classes.socialIcon])}
                      >
                        <InstagramIcon className={classes.icon} />
                      </Avatar>
                      <Avatar
                        component='a'
                        href='https://twitter.com/jecrcmun'
                        target='_blank'
                        className={classnames(['m-2', classes.socialIcon])}
                      >
                        <TwitterIcon className={classes.icon} />
                      </Avatar>
                    </Grid>
                  </div>
                ))}
              </Grid>
            ))}
          </Fade>
        </Grid>
      </div>
    </Wrapper>
  )
}

export default ExecutiveBoard
