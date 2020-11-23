import React, {useState} from "react";

const Pagination = () => {
    const [offset, setOffsetValue] = useState(0);
    const [data, setData] = useState([]);

    return (
        <div>
            <ul className="nav">
                <li className="nav-item">1</li>
                <li className="nav-item">2</li>
                <li className="nav-item">3</li>
                <li className="nav-item">4</li>
                <li className="nav-item">5</li>
            </ul>
        </div>
    );
}

export default Pagination;
