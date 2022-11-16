import React from 'react'
import classnames from 'classnames'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Image from 'gatsby-image'
import registrations from '../data/registration-data'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: '2.25rem',
    lineHeight: '45px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  },
  munTextProperty: {
    // fontFamily: "'Rubik' , sans-serif",

    fontWeight: 'bold',

    color: theme.palette.font.primary,
    letterSpacing: '0.08em',
    fontSize: '24px',
    lineHeight: '50px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
    },
  },
  card: {
    backgroundColor: '#000000',
    width: '300px',
    borderBottom: '10px solid #2b5ec5',
    borderRadius: '20px',
    height: '460px',
  },
  curve: {
    backgroundColor: theme.palette.primary.main,
    height: '100px',
    borderRadius: '50% / 100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  imgStyle: {
    height: '200px',
    margin:'auto',
    width: '200px',
  },
  button: {
    border: '3px solid #2b5ec5',
    color: 'white',
  },
}))

export default () => {
  const classes = useStyles()
  const { image, reg } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/registration-form-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reg: allFile(filter: {relativeDirectory: {eq: "reg" }})
      {
        images: nodes{
          sharp: childImageSharp{
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
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Banner
        backgrounds={[
          'linear-gradient(rgba(41, 24, 2, 0.75), rgba(41, 24, 2, 0.75))',
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.headingTextProperty}
        >
        Registrations
        </Typography>
        <Typography component='h3' className={classes.munTextProperty}>
          JECRC MUN 2022
        </Typography>
      </Banner>
      <div className='flex flex-wrap justify-center'>
        <Fade cascade bottom>
          {registrations.map((section, index) => (
            <Card
              key={index}
              raised={true}
              className={classnames([
                'my-10 mx-auto justify-center text-center flex flex-col sm:mx-10',
                classes.card,
              ])}
            >
              <div
                className={classnames([
                  'm-0 flex justify-center',
                  classes.curve,
                ])}
              >
                <Typography variant='h5' className='p-5 text-white'>
                  {section.title}
                </Typography>
              </div>
              {/* <img
                src={section.img}
                alt={section.title}
                className={classnames(['mx-auto my-10', classes.imgStyle])}
              /> */}
              <Image
                fluid={
                  reg.images.filter(
                    img => 
                    img.sharp.fluid.src.split('/').pop
                    () === 
                    section.img,
                  )[0].sharp.fluid
                }
                fadeIn={false}
                key={`${index}`}
                alt='JECRC MUN Gallery'
                className={classes.imgStyle}
                />
              <div className='w-full my-5'>
                <Typography className='text-white'>
                  {section.info ? section.info : null}
                </Typography>
              </div>
              <div className='mt-auto mb-10'>
                <Button
                  variant='outlined'
                  component={Link}
                  to={section.btnLink}
                  className={classes.button}
                >
                  {section.btn}
                </Button>
              </div>
            </Card>
          ))}{' '}
        </Fade>
      </div>
    </Wrapper>
  )
}
