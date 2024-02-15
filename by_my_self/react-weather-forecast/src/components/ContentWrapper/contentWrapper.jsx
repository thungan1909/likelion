
import MainCard from './MainCard/maincard'
import { Space, Card } from 'antd';
import NextDayCard from './NextDayCard/nextDayCard';
import LoadingCard from '../LoadingCard/loadingCard';

export default function ContentWrapper ({data})
{
     if (data != undefined)
    {
        return(
            <>
              {data.length === 0 ? (
                    <div>
                        <LoadingCard></LoadingCard>
                    </div>) 
                    : (
                       
                            <Space direction="horizontal" style={{backgroundColor: '#f6faff', marginBottom: '16px', borderRadius: '16px'}}>
                               <MainCard data={data}></MainCard>
                               <NextDayCard data={data}></NextDayCard>
                            </Space>
                        
                    )
                } 
        </>
        )
    }
    
}