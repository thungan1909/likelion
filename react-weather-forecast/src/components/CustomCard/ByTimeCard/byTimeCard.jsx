import { Space, Card } from 'antd';
import CardTemperature from '../CardTemperature/cardTemperature';
import CardTimer from '../CardTimer/cardTimer';
export default function ByTimeCard({forecastByHour, icon}) 
{
    let dataTimeInHour = new Date(forecastByHour.time);
    
   
    return(
        <Card>
            <img src={icon} style = {{width: '32px'}}></img>
            <CardTimer dataTime={dataTimeInHour.getHours() + ":00"}></CardTimer>
            
            <CardTemperature temperature={forecastByHour.temp_c}></CardTemperature>
        </Card>
    )
}