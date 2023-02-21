export default function CardTemperature ({temperature}) 
{
    return (
      <>
        <span style={{fontSize: '99px'}}>
            {temperature}
        </span>
        <span style={{fontSize: '30px'}}>
            &deg;C
        </span>
        </>
    )
    
}