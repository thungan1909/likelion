export default function cardLocation ({location}) 
{
    
        return(
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '30px', fontWeight: 'bold'}}>{location.name}</span>
                <span>{location.country}</span>
            </div>
        )
}