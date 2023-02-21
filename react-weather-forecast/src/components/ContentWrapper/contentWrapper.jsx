
import MainCard from '../../components/MainCard/maincard';

export default function ContentWrapper ({data})
{
     if (data != undefined)
    {
        return(
            <>
              {data.length === 0 ? (
                    <div>
                        <h3>No presentations!</h3>
                    </div>) 
                    : (<MainCard data= {data}/>)
                } 
        </>
        )
    }
    
}