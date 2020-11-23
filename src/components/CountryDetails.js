import React, {useState, useEffect} from "react";
import {BounceLoader} from "react-spinners";
import axios from "axios";

const CountryDetails = ({match}) => {
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        getCountryDetails();

        return () => {
            // clean up method
        }
    }, []);

    const getCountryDetails = async () => {
        try {
            const {data, status} = await axios(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
            setCountryDetails(data[0]);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            {isLoading ? (
                <BounceLoader/>
            ) : (
                <div>
                    <h2>{countryDetails.name}</h2>
                    <h4>Capital: {countryDetails.capital}</h4>
                </div>
            )}
        </div>
    );
}

export default CountryDetails;
