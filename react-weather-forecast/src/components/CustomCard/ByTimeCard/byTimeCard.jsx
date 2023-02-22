import { Space, Card } from 'antd';
import CardCondition from '../CardCondition/cardCondition';
import CardDetail from '../CardDetail/cardDetail';
import CardTemperature from '../CardTemperature/cardTemperature';
import CardTimer from '../CardTimer/cardTimer';
import './byTimeCard.css'
export default function ByTimeCard({forecastByHour, icon}) 
{
    let dataTimeInHour = new Date(forecastByHour.time);
    
   
    return(
        <Space direction="horizontal">
                <div className='cardByHour'>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={icon} style = {{width: '32px'}}></img>
                        <CardTimer dataTime={dataTimeInHour.getHours() + ":00"}></CardTimer>
                        
                       
                    </div> 
                    <div style={{marginLeft: '16px'}} >
                           <div>
                                <CardTemperature temperature={forecastByHour.temp_c}></CardTemperature>
                                <span>&deg;C </span>
                           </div>
                           <span>{forecastByHour.condition.text}</span>
                    </div>
                </div>
        </Space>
    
    )
}