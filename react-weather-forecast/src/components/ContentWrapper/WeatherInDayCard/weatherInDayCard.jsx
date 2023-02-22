import { Space, Card } from 'antd';
import ByTimeCard from '../../CustomCard/ByTimeCard/byTimeCard';
import Moon from '../../../assets/img/full-moon.png'
import Sunny from '../../../assets/img/sunny.png'
import Sunset from '../../../assets/img/sunset.png'
export default function WeatherInDayCard({data}) 
{
    const forecastToDay = data.forecast.forecastday[0];
  
    return(
        <Space direction="horizontal" style={{backgroundColor: '#6896f2', height: '140px', width: '600px', marginBottom: '16px', marginRight: '30px'}}>
           <ByTimeCard forecastByHour={forecastToDay.hour[0]} icon={Moon}></ByTimeCard>
           <ByTimeCard forecastByHour={forecastToDay.hour[8]} icon = {Sunny}></ByTimeCard>
           <ByTimeCard forecastByHour={forecastToDay.hour[16]} icon = {Sunset}></ByTimeCard>
        </Space>
    )
}