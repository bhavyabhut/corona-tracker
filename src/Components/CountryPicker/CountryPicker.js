import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../Api/index.js";
const CountryPicker = ({ countryChange }) => {
	const [contry, setContry] = useState([]);
	useEffect(() => {
		const fetchCountries = async () => {
			setContry(await countries());
		};
		fetchCountries();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect onChange={(e) => countryChange(e.target.value)}>
				<option value="">Global</option>
				{contry.map((c, i) => (
					<option key={i} value={c}>
						{c}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
