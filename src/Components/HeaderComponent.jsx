import React, { Fragment } from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <Fragment>
            <section id="headerBlock">
                <nav>
                    <div className="logoBlock"> MS Group Of Industries</div>
                    <div className="menuBlock">
                        <ul>
                            <li><Link to="/create-employee">Create Employee</Link></li>
                        </ul>

                    </div>
                </nav>
            </section>
        </Fragment>
    )
}

export default HeaderComponent;
