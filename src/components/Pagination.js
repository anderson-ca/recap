import React, {useState, useEffect, Fragment} from "react";
import {Link} from "react-router-dom";

const Pagination = ({pageData}) => {
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(pageData.length / perPage);

    useEffect(() => {
        onData();

        return () => {
            // clean up
        }

    }, [pageData]);

    useEffect(() => {
        console.log("page - ", currentPage);
        const begin = (currentPage - 1) * perPage;
        const end = begin + perPage;
        console.log("begin --> ", begin);
        console.log("end --> ", end);
        const dataChunk = pageData.slice(begin, end)
        console.log("page content - ", dataChunk);
        setData(dataChunk);
        return () => {

        }
    }, [currentPage]);

    const onData = () => {
        const begin = (currentPage - 1) * perPage;
        const end = begin + perPage;
        const slice = pageData.slice(begin, end);
        console.log(slice)
        setData(slice);
    }

    ////////////////////////////////
    // --- pagination control --- //
    ////////////////////////////////
    const next = () => {
        setCurrentPage(Math.min(currentPage + 1, maxPage));
    }
    const prev = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    }
    const jump = () => {
        const pageNumber = Math.max(1, currentPage)
        setCurrentPage(Math.min(pageNumber, maxPage));
    }


    return (
        <Fragment>
            <div>
                <h2>{currentPage}</h2>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
            <div id="flag-container">
                {data.map(({name, flag, alpha3Code}) => (
                    <img key={alpha3Code} className="flag-img-card" src={flag} alt="flag"/>
                ))}
            </div>
        </Fragment>

    );
}

export default Pagination;
