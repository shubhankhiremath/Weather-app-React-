import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useState } from 'react'; 
import './searchBox.css'; // Assuming you have a CSS file for styling
 

export default function SearchBox({updateinfo}) {
    let [City, setCity] = useState(''); // State to hold the city name
    let [Error, setError] = useState(false); // State to hold any error messages
    let API_URL = "https://api.openweathermap.org/geo/1.0/direct?q="; 
    let API_KEY = "bcd7332e7123ce98513d1fa7e8274bea";

    let getWeather = async () => {
        try{
            let res =  await fetch(`${API_URL}${City}&appid=${API_KEY}`).then((response) => {
                return response.json();
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            if (res.length === 0) {
                console.log('No results found for the specified city.');
                return;
            }
            let lat = res[0].lat;
            let lon = res[0].lon;
            let finalCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let weatherData = await fetch(finalCall).then((response) => {
                return response.json();
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            if (weatherData) {
                console.log(weatherData);

                // You can add more logic here to display the weather data
            } else {
                console.log('No weather data found for the specified coordinates.');
            }
            let result = {
                City : res[0].name,
                temp : weatherData.main.temp,
                Humidity : weatherData.main.humidity,
                Feels_Like : weatherData.main.feels_like,
                weather : weatherData.weather[0].description,
                temp_min : weatherData.main.temp_min,
                temp_max : weatherData.main.temp_max,    
            };  
            console.log(result);
            console.log('Weather data fetched successfully');
            return result;
        } catch (error) {
            throw error;
        }
        
    };

    let handleChange = (e) => {
        setCity(e.target.value);
        console.log(City);

    }
    let SubmitChange = async (e) => {
        try {
            e.preventDefault();
            console.log(City);
            setCity('');
            let newInfo = await getWeather();
            updateinfo(newInfo);
        }catch (error) {
            console.error('Error fetching weather data:', error);
            setError(true);
        }
        
    }

    return (
        <div style={{textAlign: 'center',}}>
            <h2 style={{color : 'black'}} >Search For The Weather</h2>
            <form action="">
                <TextField id="city" label="City Name" variant="standard" required value={City} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit' onClick={SubmitChange} >Search</Button>
                {Error && <p style={{color: 'red'}}>Error fetching weather data. Please try again.</p>}
            </form>  
            <br />  
        </div>
    );
}
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useState } from 'react'; 
import './searchBox.css'; // Assuming you have a CSS file for styling
 

export default function SearchBox({updateinfo}) {
    let [City, setCity] = useState(''); // State to hold the city name
    let [Error, setError] = useState(false); // State to hold any error messages
    let API_URL = import.meta.env.API_URL || "https://api.openweathermap.org/geo/1.0/direct?q="; // Fetching API URL from environment variables
    let API_KEY = import.meta.env.VITE_API_KEY; 

    let getWeather = async () => {
        try{
            let res =  await fetch(`${API_URL}${City}&appid=${API_KEY}`).then((response) => {
                return response.json();
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            if (res.length === 0) {
                console.log('No results found for the specified city.');
                return;
            }
            let lat = res[0].lat;
            let lon = res[0].lon;
            let finalCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            let weatherData = await fetch(finalCall).then((response) => {
                return response.json();
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
            if (weatherData) {
                console.log(weatherData);

                // You can add more logic here to display the weather data
            } else {
                console.log('No weather data found for the specified coordinates.');
            }
            let result = {
                City : res[0].name,
                temp : weatherData.main.temp,
                Humidity : weatherData.main.humidity,
                Feels_Like : weatherData.main.feels_like,
                weather : weatherData.weather[0].description,
                temp_min : weatherData.main.temp_min,
                temp_max : weatherData.main.temp_max,    
            };  
            console.log(result);
            console.log('Weather data fetched successfully');
            return result;
        } catch (error) {
            throw error;
        }
        
    };

    let handleChange = (e) => {
        setCity(e.target.value);
        console.log(City);

    }
    let SubmitChange = async (e) => {
        try {
            e.preventDefault();
            console.log(City);
            setCity('');
            let newInfo = await getWeather();
            updateinfo(newInfo);
        }catch (error) {
            console.error('Error fetching weather data:', error);
            setError(true);
        }
        
    }

    return (
        <div style={{textAlign: 'center',}}>
            <h2 style={{color : 'black'}} >Search For The Weather</h2>
            <form action="">
                <TextField id="city" label="City Name" variant="standard" required value={City} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit' onClick={SubmitChange} >Search</Button>
                {Error && <p style={{color: 'red'}}>Error fetching weather data. Please try again.</p>}
            </form>  
            <br />  
        </div>
    );
}

