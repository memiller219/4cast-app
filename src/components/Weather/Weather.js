import React from "react";
import styles from "./Weather.css";

const Weather = props => (
  <div className={styles.Weather}>
    {props.city && props.state && (
      <p>
        <span className={styles.CityName}>
          {props.city}, {props.state}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className={styles.Temp}>{props.temperature}&#176;</p>
    )}
    {props.humidity && <p>Humidity: {props.humidity}%</p>}
    {props.description && <p>Condition: {props.description}</p>}
  </div>
);

export default Weather;
