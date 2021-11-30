import axios from "axios";
import { useEffect, useState } from "react";

let Weather = () => {
    let [weather,setWeather] = useState();
    let getWeather = () =>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=1bddece12a6e2dc4190dc5e393361c57')
        .then((res)=>{
            setWeather(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        getWeather();
    },[])

    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
    
    console.log(weekday);

    return(
        <div style={{display:'flex', justifyContent:'center', marginTop: 20, marginBottom: 20, color:'#151d29'}}>
        
        <div style={{width: 800, height: 550, backgroundColor:'#91b4e6'}}>
        <h4>Current Weather</h4>

        <hr/>

           <div style={{marginTop:20}}>
            {weekday}
           </div>

           <div style={{marginTop:20}}>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}/>
           <br/>
           <h1>
                {(weather?.main?.temp -273.15).toFixed(2)}°C
           </h1>

           <h3>
                {weather?.name}
           </h3>

           <hr/>
           </div>

           <div style={{marginTop: 20}}>
                Description: {weather?.weather[0]?.description} 
           </div>
           

           <div style={{marginTop: 20}}>
                Longitude: {weather?.coord?.lon} &nbsp; Latitude: {weather?.coord?.lat}
           </div>

           <div style={{marginTop:20}}>
                Wind Speed: {weather?.wind?.speed} &nbsp; &nbsp; &nbsp; Gust: {weather?.wind?.gust}
           </div>

           <div style={{marginTop: 20}}>
                Humidity: {weather?.main?.humidity} &nbsp; &nbsp; &nbsp; Feels Like: {(weather?.main?.feels_like -273.15).toFixed(2)}°C
           </div>

           
        </div>
        </div>
    )
}

export default Weather;