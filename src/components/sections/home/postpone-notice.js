import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto auto',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: '10px',
    paddingTop: theme.spacing(2),
    border: '2px solid #999',
    [theme.breakpoints.down('xs')]: {
      margin: '8px',
      marginBottom: theme.spacing(8),
    },
  },
  heading: {
    color: theme.palette.primary.main,
    // textTransform: 'uppercase',
    fontWeight: 600,
  },
  text: {
    color: '#ffffff',
    textJustify: 'justify',
    padding: theme.spacing(2),
    fontWeight: 500,
  },
}))

const CoronaWarning = () => {
  const classes = useStyles()
  return (
    <Grid item sm={9} md={7} lg={8} className={classes.root}>
      
      <Typography variant='h3' className={classes.heading}>
        3<sup>rd </sup>- December
      </Typography>
      <Typography variant='h4' className={classes.text}>
      Register Now ! 
        {/* Coming Soon */}
      </Typography>
    </Grid>
  )
}
// 2B5EC5
export default CoronaWarning
