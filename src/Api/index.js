import axios from "axios";
const url = "https://covid19.mathdro.id/api";

const fetchdata = async (country) => {
	let flexurl = url;
	if (country) {
		flexurl = `${url}/countries/${country}`;
	}
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(flexurl);
		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (e) {
		console.log(e);
	}
};
export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(url + "/daily");
		console.log(data);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (e) {
		// statements
		console.log(e);
	}
};

export const countries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get("https://covid19.mathdro.id/api/countries");
		return countries.map((country) => country.name);
	} catch (e) {
		// statements
		console.log(e);
	}
};
export default fetchdata;
