import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({info}) {
    const HotUrl = "https://cdn.thewire.in/wp-content/uploads/2020/10/17192643/drought-5226296_1280.jpg"
    const ColdUrl = "https://static.vecteezy.com/system/resources/thumbnails/027/001/065/small_2x/beautiful-cold-morning-winter-snow-background-with-trees-forest-and-mountain-in-the-background-gently-snow-view-against-the-blue-sky-free-space-for-your-decoration-photo.jpg"
    const RainUrl = "https://static.vecteezy.com/system/resources/thumbnails/029/772/287/small/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg"
    return (
        <div className="InfoBox">
        <h2>Weather Details</h2>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image= { 
                    info.humidity > 80
                    ? RainUrl
                    : info.temp > 15
                    ? HotUrl
                    : ColdUrl
                }
                alt="weather img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}&nbsp;
                { 
                    info.humidity > 80
                    ? <ThunderstormIcon />
                    : info.temp > 15
                    ? <WbSunnyIcon />
                    : <AcUnitIcon />
                }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Max Temperature = {info.temp}</p>
                <p>Min Temperature = {info.temp}</p>
                <p>Wind Speed = {info.windSpeed}</p>
                <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    )
}