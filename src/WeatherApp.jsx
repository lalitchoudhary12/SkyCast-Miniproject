import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
export default function WeatherApp () {
    let [weatherDetails , setWeatherDetails] = useState({
        city : "Pune" ,
        feelsLike : 25.14,
        humidity : 41,
        temp : 25.47,
        tempMax : 25.47,
        tempMin : 25.47,
        weather : "clear sky",
        windSpeed : 4.16
    })

    let updateInfo = (result)=>{
        setWeatherDetails(result)
    }
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherDetails}/>
        </div>
    )
}