
import MainCard from '../../components/MainCard/maincard';
import { Space, Card } from 'antd';

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
                        <Space direction="horizontal"  size={[0, 48]}>
                            <Card style={{backgroundColor: '#f6faff', margin: '16px'}}>
                               <MainCard data={data}></MainCard>
                            </Card>
                        </Space>
                    )
                } 
        </>
        )
    }
    
}