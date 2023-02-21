import {  Card, Space  } from 'antd';
import { useEffect, useState } from 'react';
import CardCondition from '../../CustomCard/CardCondition/cardCondition';
import CardTimer from '../../CustomCard/CardTimer/cardTimer';
import CardLocation from '../../CustomCard/CardLocation/cardLocation';
import CardTemperature from '../../CustomCard/CardTemperature/cardTemperature';
import CardDetail from '../../CustomCard/CardDetail/cardDetail';
import './mainCard.css'
export default function MainCard({data}) 
{
    
   return(
       
            <>
             <Card  className='card-Wrapper'  >
                     <CardTimer dataTime = {data.location.localtime} myStyle={{fontSize: '16px'}}></CardTimer>
                     <CardLocation location = {data.location}></CardLocation>
                     <CardTemperature temperature={data.current.temp_c} myStyle={{fontSize: '66px'}}></CardTemperature>
                     <CardCondition condition={data.current.condition}></CardCondition>
                     <CardDetail current={data.current}></CardDetail>
             </Card>
            </>

       

   )
}