import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../Api";
const CountryPicker = ({ countryChange }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCountry(await countries());
    };
    fetchCountries();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        onChange={(e) => {
          countryChange(e.target.value.split(".."));
        }}
      >
        <option value="">Global</option>
        {country
          ? country.map((c, i) => (
              <option key={i} value={`${c.name}..${c.code}`}>
                {c.name}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
