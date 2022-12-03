import React from "react";
const Ads = () => {
    return(
        <ul className="list-group border border-light">
            <div className = 'p-2 align-content-center'>
                Get the latest jobs and industry news
            </div>
            <div className = 'row'>
                <div className = 'col-6 pe-1'>
                    <img className = 'rounded-circle float-end' src="/images/owl.jpeg" width={60}  alt="..."/>
                </div>
                <div className = 'col-6 ps-1'>
                    <img className = 'float-start' src="/images/nasa.png" width={60}  alt="..."/>
                </div>
            </div>
            Explore relevant opportunities with Nasa
            <button className="btn btn-primary rounded-pill">Follow</button>
        </ul>
    );
};

export default Ads;