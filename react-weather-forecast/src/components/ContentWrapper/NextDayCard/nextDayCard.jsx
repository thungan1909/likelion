
import ADay from "./ADay/aDay";
import { Space, Card } from 'antd';
export default function NextDayCard({data}) 
{
    const forecastday = data.forecast.forecastday;
    return (
        <Space direction="horizontal">

           <ADay forecastday = {forecastday[1]}> </ADay>
           <ADay forecastday = {forecastday[2]}> </ADay>
           <ADay forecastday = {forecastday[3]}> </ADay>
       </Space>

    )
}