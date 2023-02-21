export default function cardLocation ({location}) 
{
        return(
            <div style={{ textAlign: 'center'}}>
                <h1 >{location.name}</h1>
                <span>{location.country}</span>
            </div>
        )
}