import Country from "./Country";

const CountryList = ({countries, setButton, onButtonPress}) => {

    const countryComponents = countries.map((country,id) => {
        return <Country country = {country} key={id} setButton= {setButton} onButtonPress={onButtonPress}/>
    })

    return ( 
        <section>
            <h2>All Countries</h2>
            {countryComponents}
        </section>

     );
}
 
export default CountryList;