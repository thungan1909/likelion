import {  Card, Space  } from 'antd';
import CardTimer from '../CardTimer/cardTimer';
export default function MainCard({data}) 
{
    console.log(data.location.localtime);
   return(
    <Card   style={{backgroundColor: '#9295e4', height: '600px'}}>
            <CardTimer dataTime = {data.location.localtime}></CardTimer>
    </Card>
   )
}