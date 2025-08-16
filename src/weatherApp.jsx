<<<<<<< HEAD
import SearchBox from './searchBox.jsx';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function WeatherApp() {

    let [weatherData, setWeatherData] = useState({
        City: 'kalaburagi',
        temp: 0,
        Humidity: 0,
        Feels_Like: 0,
        weather: '',
        temp_min: 0,
        temp_max: 0

    });
    

    let updateinfo = (result) => {
        setWeatherData(result);
    }
    return (
        <div className="WeatherApp">
            <h1 style={{color : "black", margin: '0px'}}>Weather App</h1>
            <SearchBox updateinfo={updateinfo} />
            <InfoBox info={weatherData} />
        </div>
    );
=======
import SearchBox from './searchBox.jsx';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function WeatherApp() {

    let [weatherData, setWeatherData] = useState({
        City: 'kalaburagi',
        temp: 0,
        Humidity: 0,
        Feels_Like: 0,
        weather: '',
        temp_min: 0,
        temp_max: 0

    });
    

    let updateinfo = (result) => {
        setWeatherData(result);
    }
    return (
        <div className="app-bg">
            <div className="main-card">
                <div className="main-flex">
                    <h1 style={{color : "black", margin: '0px'}}>Weather App</h1>
                    <SearchBox updateinfo={updateinfo} />
                    <InfoBox info={weatherData} />
                </div>
            </div>
        </div>
    );
>>>>>>> d70eebb ( changed UI)
}