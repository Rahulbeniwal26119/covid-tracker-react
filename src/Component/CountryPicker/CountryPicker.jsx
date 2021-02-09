import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../API';

const CountryPicker = ({handleCountryChange}) => {
  const [countriesFetched, setCountriesFetched] = useState([])

  useEffect(() => {
    const fetchedCountries = async () => {
      setCountriesFetched(await fetchCountries())
    }
    fetchedCountries();
  }, [setCountriesFetched])

  console.log(countriesFetched)
  return (<FormControl className={styles.formControl}>
    <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
      <option value="">global</option>
      {
        countriesFetched.map((country, i) =>< option key = {
          i
        }
        value = {
          country
        } > {
          country
        }</option>)
      }
    </NativeSelect>
  </FormControl>)
}

export default CountryPicker;
