import React from 'react';
import styles from './Form.css';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = (props) => (

    <form onSubmit={props.getWeather} className={styles.FormContainer} id="form">
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="state" placeholder="State..." />
        <button onClick={props.removeFormHandler}>
            <FontAwesomeIcon
                icon={faSearchLocation}
                className={styles.Icon}
            />
        </button>
    </form>
);

export default Form;