import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountriesContainer = () => {


    const [countries, setCountries] = useState([]);

    const [button, setButton] = useState(false);

    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect (() => {
    const loadAllCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");            
        const data = await response.json();
        setCountries(data)   
    }

        loadAllCountries();
    }, [])

    const handleButtonPress = (countryVisited) => {

        const updatedCountryList = countries.filter(
            eachCountry => eachCountry !== countryVisited
        );

        const updatedVisitList = [...visitedCountries];
        updatedVisitList.push(countryVisited);
        setVisitedCountries(updatedVisitList);
        setCountries(updatedCountryList);
    }



    
    return ( 
        <>
        <div>
        <h1>Travel Bucket List</h1>
        <CountryList countries={countries} setButton={()=>{}} onButtonPress={handleButtonPress}/>
        </div>

        <div>
            <VisitedCountryList visitedCountries = {visitedCountries} setButton={() => {}} onButtonPress={handleButtonPress}/>
        </div>
        </>
        

     );
}
 
export default CountriesContainer;