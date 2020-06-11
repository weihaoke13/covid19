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

class App extends React.Component{

    //pass data to state
    state = {
        //object
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        //populate data
        this.setState({data: fetchedData});

        // console.log(data); 
    }

    //handle countrypicker.jsx to save in the state
    handleCountryChange = async (country) => {
        console.log(country);
        //fetch teh data
        //set the state
    }

    render(){
        //retreive all the data from the state

        const{data} = this.state;
        return(
            <div className={styles.container}>
                {/* passing as props */}
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart/>
            </div>
        )
    }
}

export default App;