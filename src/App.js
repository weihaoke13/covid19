//class based component
import React from 'react';

//import componets
//option one:
// import Cards from './components/Cards/Card';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

//option two:
import {Cards, Chart,CountryPicker} from './components';

import styles from './App.module.css'; 

import {fetchData} from './api';

import coronaImage from './images/covid-2.jpg'

//only class component
class App extends React.Component{

    //pass data to state
    state = {
        //object
        //initial state
        data:{},
        country:'',
    }

    async componentDidMount(){
        //fetchData is from api 
        const fetchedData = await fetchData();

        //populate data
        this.setState({data: fetchedData});
        // console.log(data); 
    }

    //handle countrypicker.jsx to save in the state
    handleCountryChange = async (country) => {
        //fetch teh data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // console.log(country);
        //set the state
        //change the country after switch the country name
        this.setState({data: fetchedData, country: country});


    }

    render(){
        //retreive all the data from the state

        const{data, country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID19'></img>
                {/* passing as props */}
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;