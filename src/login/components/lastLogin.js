import React from 'react';

export default function
    formatLastLogin(props) {

    var lastlogin = new Date(props.lastlogin);

    return (
        <p className="lead">Your last date login was {new Intl.DateTimeFormat('en-NZ', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hourCycle: 'h24',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(lastlogin)}.</p>
    )
}