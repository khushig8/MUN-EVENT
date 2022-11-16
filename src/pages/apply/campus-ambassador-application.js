import React from 'react'
import Wrapper from '../../components/wrapper'
import Banner from '../../components/banner'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import AmbassadorForm from '../../components/campus-ambassador-form'

const useStyles = makeStyles(theme => ({
  headingTextProperty: {
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: '1.75rem',
    lineHeight: '40px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.25rem',
    },
  },
  munTextProperty: {
    // fontFamily: "'Rubik' , sans-serif",

    fontWeight: 'bold',

    color: theme.palette.font.primary,
    letterSpacing: '0.08em',
    fontSize: '20px',
    lineHeight: '50px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 35,
    },
  },
}))

export default () => {
  const classes = useStyles()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/registration-form-bg.jpg" }) {
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
        {/* <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        /> */}
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
          Campus Ambassador Application
        </Typography>
        <Typography component='h3' className={classes.munTextProperty}>
          JECRC MUN 2022
        </Typography>
      </Banner>
      <AmbassadorForm />
    </Wrapper>
  )
}
