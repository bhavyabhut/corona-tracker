import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (country) => {
  let flexurl = url;
  if (country) flexurl = `${url}/countries/${country}`;

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
export const fetchDailyData = async (code) => {
  try {
    const {
      data: { dataProvider },
    } = await axios.get(
      `https://covid19.richdataservices.com/rds/api/query/int/jhu_country/select?cols=date_stamp,cnt_confirmed,cnt_death,cnt_recovered&where=(iso3166_1=${code})&format=amcharts&limit=5000`
    );
    const modifiedData = dataProvider.map((dailyData) => ({
      confirmed: dailyData.cnt_confirmed,
      deaths: dailyData.cnt_death,
      date: dailyData.date_stamp,
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
    return countries.map((country) => ({
      name: country.name,
      code: country.iso2,
    }));
  } catch (e) {
    // statements
    console.log(e);
  }
};
export default fetchData;
