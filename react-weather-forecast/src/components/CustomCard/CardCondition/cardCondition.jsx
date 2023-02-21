export default function CardCondition ({condition}) 
{
    return (
            <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center',  justifyContent: 'center',}} >
             

                <img src={condition.icon} 
                    style = {{  
                                width: '150px', 
                                }}>
                </img>
                <span style={{fontSize: '16px'}}>
                    {condition.text}
                </span>
            </div>
    
    )
}