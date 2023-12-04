import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountriesContainer = () => {


    const [countries, setCountries] = useState([]);

    const [button, setButton] = useState(false);


    useEffect (() => {
    const loadAllCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");            
        const data = await response.json();
        setCountries(data)   
    }

        loadAllCountries();
    }, [])
    
    return ( 
        <>
        <h1>Travel Bucket List</h1>
        <CountryList countries={countries} setButton={setButton}/>
        </>
        

     );
}
 
export default CountriesContainer;