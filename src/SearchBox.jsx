import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox ({updateInfo}){
    let [city, setCity] = useState("")
    let [error ,setError] = useState(false)
    const apiUrl = "your api url" 
    const apiKey = "api key"
    let weatherResult = async ()=>{
        try {
            let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
            let data = await response.json()
            let result = {
                city : city,
                temp : data.main.temp,
                tempMin : data.main.temp_min,
                tempMax : data.main.temp_max,
                humidity : data.main.humidity,
                feelsLike : data.main.feels_like,
                weather : data.weather[0].description,
                windSpeed : data.wind.speed
            }
            console.log(result)  
            return result
            
        } catch (err){
            throw err
        }
    }
    let handleInputChange = (event)=>{
        setCity(event.target.value)
    }

    let handleSubmit = async(event)=>{
        try {
            event.preventDefault()
            console.log(city)
            let newInfo = await weatherResult();
            updateInfo(newInfo);
            setCity("");
        } catch (err ){
            setError(true)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="enter city" variant="outlined" onChange={handleInputChange} value={city}/>
            <br /><br />
            <Button variant="contained" size="medium" type='submit'>Search</Button>
            </form>
            { error && <p><b>No such place exists!</b></p>}
        </div>
    )
}