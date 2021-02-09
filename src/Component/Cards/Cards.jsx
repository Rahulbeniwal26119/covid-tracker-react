import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames';
// class Cards extends React.Component
// {
//   render(){
//     return (
//       <div>Cards </div>
//     )
//   }
// }
const Cards = ({
  data: {
    confirmed,
    recovered,
    deaths,
    lastUpdate
  }
}) => {
  if (!confirmed) {
    return 'Loading...'
  }

  return (<div className={styles.container}>
    <Grid container="container" spacing={3} justify="center">
      <Grid item="item" component={Card} className={cx(styles.card , styles.infected)} xs={12} md={3}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom="gutterBottom">Infected</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration = {1.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of Active Cases of Covid 19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item="item" component={Card} className={cx(styles.card , styles.recovered)} xs={12} md={3}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom="gutterBottom">recovered</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recovered from Covid 19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item="item" component={Card} className={cx(styles.card , styles.deaths)} xs={12} md={3}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom="gutterBottom">deaths</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
        <Typography variant="body2">Number of deaths by Covid 19
        </Typography>
      </Grid>
    </Grid>

  </div>)
}
export default Cards;