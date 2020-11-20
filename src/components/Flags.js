import React, {useState, useEffect, Fragment} from "react";
import {BounceLoader} from "react-spinners";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";
import axios from "axios";

const Flags = () => {
    // --- handling state --- //
    const [flags, setFlags] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    // --- handling events --- //
    useEffect(() => {
        console.log("use effect...")
        getFlags();
        return () => {
            // clean up method
        }
    }, []);

    const getFlags = async () => {
        try {
            const response = await axios("https://restcountries.eu/rest/v2/all");
            console.log(response);
            setFlags(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(true)
        }

    }

    return (
        <Fragment>
            <div>
                <h2>Flag Header</h2>
            </div>
            <div>
                <Pagination/>
            </div>
            <div id="flag-container">
                {isLoading ? (
                    <BounceLoader/>
                ) : (
                    flags.map(({name, flag, alpha3Code}) => (
                        <div className="country-card" key={alpha3Code}>
                            <Link to={`/flag/${name}`}>
                                <h5>{name}</h5>
                                <img className="flag-img-card" src={flag} alt="flag"/>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </Fragment>
    );
}

export default Flags;
