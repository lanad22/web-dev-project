import React, { useState } from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Search = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[1];
    const [query, setQueries] = useState(null);

    const handleChange = (e) => {
        setQueries(e.target.value);
    }

    return (
        <div>
                <div className = 'input-group' >
                    <input
                        placeholder="Search"
                        className="ps-2 mt-3 form-control"
                        onChange={handleChange}
                    />
                    <div className = 'input-group-append mt-3'>
                        <button
                            className = {`position-absolute btn  ${active === 'search' ?'btn-primary':'btn-dark'}`}>
                            <Link to={{
                                pathname: `/search/${query}`}}><i className="bi bi-search text-white"></i></Link>
                        </button>
                    </div>
                </div>

        </div>
    );
}

export default Search;
