import Country from "./Country";

const CountryList = ({countries, setButton}) => {

    const countryComponents = countries.map((country,id) => {
        return <Country country = {country} key={id} setButton= {setButton}/>
    })

    return ( 
        <section>
            <h2>All Countries</h2>
            {countryComponents}
        </section>

     );
}
 
export default CountryList;