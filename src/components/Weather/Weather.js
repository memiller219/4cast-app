import React from 'react';



const Weather = props =>
    (
        <div>
            {props.city && props.state && <p>Location: {props.city}, {props.state}</p>}
            {props.temperature && <p>Temperature: {props.temperature} degrees</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Condition: {props.description}</p>}
        </div>
    )


/*
{props.city && props.state && <p>Location: {props.city},{props.state}</p>}
{props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Condition: {props.description}</p>}
            {props.error && <p>{props.error}</p>}

*/
export default Weather;