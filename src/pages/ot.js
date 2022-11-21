import React from 'react'
import Wrapper from '../components/wrapper'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from '../components/banner'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import makeStyles from '@material-ui/styles/makeStyles'
import Image from 'gatsby-image'
import classnames from 'classnames'
import Fade from 'react-reveal'
import teams from '../data/ot_details'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#bc923d',
    fontWeight: 'bold',
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
  root: {
    margin: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      marginLeft: '0',
      marginRight: '0',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '90%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '70%',
    },
  },
  cardContainer: {
    display: 'flex',
    position: 'relative',
    width: '250px',
    height: '250px',
    maxHeight: '250px',
    color: '#FFF',
    backgroundColor:"#bc923d",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    margin: theme.spacing('4'),
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5px',
      marginRight: '5px',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    '&:hover > div': {
      filter: 'brightness(0.5)',
    },
    '&:hover > header': {
      opacity: '0',
      transition: 'none',
    },
    '&:hover > main': {
      opacity: '1',
      paddingBottom: theme.spacing(4),
    },
  },
  bottomText: {
    position: 'absolute',
    width: '100%',
    transitionDelay: '0.3s',
    transition: 'all 0.3s ease-out',
    animationDelay: '2s',
    animation: '$cssAnimation 0s 3s ease-out',
    textAlign: 'center',
    bottom: 0,
    opacity: '1',
    clipPath: 'polygon(97% 100%, 3% 100%, 50% -180%)',
    background: '#bc923d',
  },
  imageStyle: {
    width: '100%',
    height: '250px',
    borderRadius: '10px',
  },
  hoverContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: 'all 0.3s ease-out',
    textAlign: 'center',
    bottom: 0,
    background: '#bc923da1',
    borderRadius: '10px',
  },
  socialIcons: {
    position: 'absolute',
    alignSelf: 'center',
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
  hoverText: {
    bottom: 0,
  },
}))

function Team(props) {
  const classes = useStyles()
  const theme = useTheme()
  const { image, team } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/committees.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      team: allFile(filter: { relativeDirectory: { eq: "team" } }) {
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
          SECRETARIAT
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
        {teams.map((value, index) => (
          <div key={index} className='w-full flex justify-center'>
            <div className={classes.root}>
              <Fade bottom>
                {value.members.map((member, index) => (
                  <div key={index} className={classes.cardContainer}>
                    <Image
                      fluid={
                        team.images.filter(
                          image =>
                            image.sharp.fluid.src.split('/').pop() ===
                            member.image,
                        )[0].sharp.fluid
                      }
                      fadeIn={false}
                      key={`${index}`}
                      alt='JECRC MUN TEAM'
                      className={classes.imageStyle}
                    />
                    <Grid className={classes.bottomText} component='header'>
                      <Typography variant='h6' className='py-2'>
                        {member.name}
                      </Typography>
                      <Typography variant='subtitle1'>
                        {member.designation}
                      </Typography>
                    </Grid>
                    <Grid className={classes.hoverContainer} component='main'>
                      <Grid className={classes.hoverText}>
                        <Typography variant='h5'>{member.name}</Typography>
                        <Typography variant='subtitle1'>
                          {member.designation}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Team