import Country from "./Country";

const VisitedCountryList = ({visitedCountries, setButton, onButtonPress}) => {


    const visitedCountryComponents = visitedCountries.map((country,id) => {
        return <Country country = {country} key={id} setButton= {setButton} onButtonPress={onButtonPress}/>
    })

    return ( 
        <section>
        <h2>Countries Visited</h2>
        {visitedCountryComponents}
    </section>
        
     );
}
 
export default VisitedCountryList;