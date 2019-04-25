import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';
import './App.css';


//const API_KEY = '7d75c31996c9b01ac5d74965b2d1c8c1';
const API_KEY = '4c339c6d24a7454fb3cd0d26c50b2413';



class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    state: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }



  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const api_call = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city},${state}&units=I&key=${API_KEY}`);




    const info = await api_call.json();

    console.log(info);
    if (city && state) {
      this.setState({
        city: info.data[0].city_name,
        state: info.data[0].state_code,
        temperature: info.data[0].temp,
        humidity: info.data[0].rh,
        description: info.data[0].weather.description,
        //icon: info.data[0].weather.code
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        state: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter a City and State.'
      })
    }
  }


  render() {
    return (

      <div>
        <Layout />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          state={this.state.state}
          humidity={this.state.humidity}
          description={this.state.description}
          // icon={this.state.icon}
          error={this.state.error}
        />
      </div>

    );
  }
}

export default App;
