import {  Card, Space  } from 'antd';
import { useEffect, useState } from 'react';
import CardTimer from '../CardTimer/cardTimer';
export default function MainCard({data}) 
{
    
   return(
       
            <>
             <Card   style={{backgroundColor: '#9295e4', height: '600px'}}>
                     <CardTimer dataTime = {data.location.localtime}></CardTimer>
             </Card>
            </>

       

   )
}