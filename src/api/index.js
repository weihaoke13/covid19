import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//cards
//asynchronous function
export const fetchData = async (country) => {

    let changeableUrl = url; 

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        const {data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        // const modifiedData = {
        //     confirmed, recovered, deaths, lastUpdated,
        // }

        return {confirmed, recovered, deaths, lastUpdate,};
    }
    catch(error){
        console.log(error);

    }
}

//chart
export const fetchDailyData = async() =>{
    try{
        //daily data
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;

    }catch(error){
        console.log(error);
    }
}

//countrypciker
export const fetchCountries = async () =>{
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);

    }catch(error){

    }

}