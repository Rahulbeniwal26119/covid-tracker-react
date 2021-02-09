import React from 'react'

import {Cards , Chart , CountryPicker}  from './Component'
import styles from './App.module.css';
import {fetchData} from './API';
import coronaImage from './images/coronavirus.jpeg';

class App extends React.Component {
  state = {
    data : {},
    country : '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({
      data : fetchedData})
  }

   handleCountryChange = async (country)=>{
     const fetchedData = await fetchData(country)
     this.setState({data : fetchedData, country})
     console.log(this.state);
  }

  render() {
    const {data , country} = this.state;
    return (<div className={styles.container}>
      <img className={styles.image} alt="COVID-19" src={coronaImage}/>
      <Cards data={data}/>
    <CountryPicker handleCountryChange = {this.handleCountryChange}/>
  <Chart data={data} country={country}/>
    </div>)
  }
}

export default App;
