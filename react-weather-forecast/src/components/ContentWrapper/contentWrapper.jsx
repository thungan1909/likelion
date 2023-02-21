
import MainCard from './MainCard/maincard'
import { Space, Card } from 'antd';
import NextDayCard from './NextDayCard/nextDayCard';

export default function ContentWrapper ({data})
{
     if (data != undefined)
    {
        return(
            <>
              {data.length === 0 ? (
                    <div>
                        <h3>No data!</h3>
                    </div>) 
                    : (
                       
                            <Space direction="horizontal" style={{backgroundColor: '#f6faff', margin: '16px'}}>
                               <MainCard data={data}></MainCard>
                               <NextDayCard data={data}></NextDayCard>
                            </Space>
                        
                    )
                } 
        </>
        )
    }
    
}