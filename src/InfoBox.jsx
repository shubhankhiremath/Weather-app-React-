
import {useState} from 'react';
import Search from './searchBox'
import img from './assets/Weather.jpg';
import cold from './assets/cold.jpg';
import hot from './assets/download.jpg';
import humid from './assets/humid.webp';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}) {
    
    // let info = {
    //     City: "Kalaburagi",
    //     temp: 25.91 ,
    //     Humidity: 83 ,
    //     Feels_Like: 26.72 ,
    //     weather: "clear sky",
    // }
    if (!info || Object.keys(info).length === 0) {
        return <div className='Info' style={{ textAlign: 'center', color: 'red' }}>No results found for the specified city.</div>;
    }
    
    return (
        <div className='Info' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',padding: '2px' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image = {info.temp > 30 ? hot : info.temp < 20 ? cold : info.Humidity > 80 ? humid : img}
                        alt="Weather Image"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.City}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Humidity :  {info.Humidity}</p>
                            <p>Feels Like : {info.Feels_Like}&deg;C</p>
                            <p>Discription : {info.weather}</p>
                            <p>Max temperature : {info.temp_max}&deg;</p>
                            <p>Min temperature : {info.temp_min}&deg;</p>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        
        </div>

    );
}



import {useState} from 'react';
import Search from './searchBox'
import img from './assets/Weather.jpg';
import cold from './assets/cold.jpg';
import hot from './assets/download.jpg';
import humid from './assets/humid.webp';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}) {
    
    // let info = {
    //     City: "Kalaburagi",
    //     temp: 25.91 ,
    //     Humidity: 83 ,
    //     Feels_Like: 26.72 ,
    //     weather: "clear sky",
    // }
    if (!info || Object.keys(info).length === 0) {
        return <div className='Info' style={{ textAlign: 'center', color: 'red' }}>No results found for the specified city.</div>;
    }
    
    return (
        <div className='Info' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',padding: '2px' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image = {info.temp > 30 ? hot : info.temp < 20 ? cold : info.Humidity > 80 ? humid : img}
                        alt="Weather Image"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.City}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Humidity :  {info.Humidity}</p>
                            <p>Feels Like : {info.Feels_Like}&deg;C</p>
                            <p>Discription : {info.weather}</p>
                            <p>Max temperature : {info.temp_max}&deg;</p>
                            <p>Min temperature : {info.temp_min}&deg;</p>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        
        </div>

    );
};



