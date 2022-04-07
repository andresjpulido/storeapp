import { Fragment } from "react";
import React from 'react';

export default function Notifications(props) {

    return (
        <Fragment>
            <h1>Notifications</h1>
 
            {
                props.orders && props.orders.length > 0?
                <p className="lead">There are <span className="badge badge-secondary"> {props.orders.length} </span> pending orders.</p>
                :<div>No notifications</div>
            }

        </Fragment>)
}
