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
//
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

var required = [
  {
    title : "Infected",
    tag  : confirmed ,
    lastUpdate : new Date(lastUpdate).toDateString(),
    tagLine : "Number of Active Cases of Covid 19"
  },
  {
    title : "recovered",
    tag  : recovered ,
    lastUpdate : new Date(lastUpdate).toDateString(),
    tagLine : "Number of recovered from Covid 19"
  },
  {
    title : "deaths",
    tag  : deaths ,
    lastUpdate : new Date(lastUpdate).toDateString(),
    tagLine : "Number of deaths by Covid 19"
  }
]
  var cards = required.map((card)=>{
    return (
      <Grid item="item" component={Card} className={cx(styles.card , styles.infected)} xs={12} md={3}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom="gutterBottom">{card.title}</Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={card.tag.value}
              duration = {1.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">{card.lastUpdate}</Typography>
        <Typography variant="body2">{card.tagline}
          </Typography>
        </CardContent>
      </Grid>
    )
  })
  return (<div className={styles.container}>
    <Grid container="container" spacing={3} justify="center">
    {cards}
    </Grid>

  </div>)
}
export default Cards;
