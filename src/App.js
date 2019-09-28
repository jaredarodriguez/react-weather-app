import React, { Component } from 'react';
import Form from './Components/Form';
import Titles from './Components/Titles';
import Weather from './Components/Weather';



class App extends React.Component {

  getWeather = async (e) => {
    const api_call =
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=$16a3ab74d25956c61978403924be40bb`);

    const response = await api_call.json();

    console.log(response);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div >
    )
  };

};


export default App;
