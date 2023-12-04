const Country = ({country, setButton}) => {

    const handleClick = () => {
        setButton(true)
    }

    return (
        <>
        <p>{country.name.common}</p>
        <button onClick={handleClick}>Visited?</button>
        </>
      );
}
 
export default Country;