import windImg from '../../../assets/img/wind.png'
import humidityImg from '../../../assets/img/humidity.png'
import uvImg from '../../../assets/img/uv-protection.png'
import './cardDetail.css'
import {  Card  } from 'antd';
export default function CardDetail ({current}) 
{
    return (
         <>
            <div className='card-Detail'>
                <div className='detail__info'>
                    <img className='img_icon' src={windImg} alt="wind"/>
                    <span>{current.wind_mph} mph</span>
                </div>
                <div className='detail__info'>
                    <img className='img_icon' src={humidityImg} alt="humidity"/>
                    <span>{current.humidity}%</span>
                </div>
                <div className='detail__info'>
                    <img className='img_icon' src={uvImg} alt="uv"/>
                    <span>{current.uv}</span>
                </div>
            
            </div>
        </>
    )
}