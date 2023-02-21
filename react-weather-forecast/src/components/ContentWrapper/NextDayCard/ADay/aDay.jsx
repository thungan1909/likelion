import CardTimer from "../../../CustomCard/CardTimer/cardTimer";
import CardCondition from "../../../CustomCard/CardCondition/cardCondition";
import './aDay.css'
import CardTemperature from "../../../CustomCard/CardTemperature/cardTemperature";
export default function ADay({forecastday}) 
{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(forecastday.date)
    let formatedDayInWeek = weekday[d.getUTCDay()] ;


   

    return (
       <div className="aDay">
         <CardTimer dataTime={formatedDayInWeek} myStyle = {{fontSize: '40px'} }></CardTimer>
         <CardTimer dataTime={forecastday.date} myStyle={{fontSize: '16px'}}></CardTimer>
         <CardCondition condition={forecastday.day.condition}></CardCondition>
         
         <div style={{display: 'flex', fontSize: '16px'}}>
            <CardTemperature temperature={forecastday.day.mintemp_c}></CardTemperature>
            <span>~</span>
            <CardTemperature temperature={forecastday.day.maxtemp_c}></CardTemperature>
            <span>&deg;C </span>
         </div>
       </div>
    )
}