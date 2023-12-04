const Country = ({country, setButton, onButtonPress}) => {

    const handleClick = () => {
        setButton(true);
        onButtonPress(country);
    }

    

    return (
        <>
        <p>{country.name.common}</p>
        <button onClick={handleClick}>Visited?</button>
        </>
      );
}
 
export default Country;