import waitingImg from '../../assets/img/wait.png'
export default function LoadingCard () 
{
    return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img  style={{width: '64px', marginBottom: '16px'}} src={waitingImg}></img>
            <div>Wait a minute...</div>
         </div>
    )
}