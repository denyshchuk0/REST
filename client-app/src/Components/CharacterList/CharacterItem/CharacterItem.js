import React from "react";

const CharacterItem = ({name, hitPoints, strength, defense, intelligence}) => {

    return (
        <div className="col-lg-10 mx-auto">

            <div className="filter-result">
                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                    <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                        <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                            FD
                        </div>
                        <div className="job-content">
                            <h5 className="text-center text-md-left">{name}</h5>
                            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                                <li className="mr-md-4">
                                Strength {strength}
                                </li>
                                <li className="mr-md-4">
                                {/* <i className="zmdi zmdi-money mr-2"></i> */}
                                    HistPoints {hitPoints}
                                 </li>
                                <li className="mr-md-4">
                                    Defense {defense}
                                </li>
                                <li className="mr-md-4">
                                    Intelligence {intelligence}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="job-right my-4 flex-shrink-0">
                        <a href="#" className="btn d-block w-100 d-sm-inline-block btn-light">Apply now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterItem;