import {  Card, Space  } from 'antd';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';

import SearchBar from '../../components/SearchBar/searchBar';
import ContentWrapper from '../../components/ContentWrapper/contentWrapper';
import './home.css'
export default function Home () 
{
    const [data, setData] = useState([]);
    const [inputLocation, setInputLocation] = useState("VietNam");
    const [isError, setIsError] = useState(false);
   

    useEffect(() => {
        handleGetDataFromApi(inputLocation);
    }, [inputLocation])

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //   }, []);
 

    const handleGetDataFromApi = (inputLocation) => {
        const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=4acb30f8960e480c96131445230802&q=${inputLocation}&days=10&aqi=no&alerts=no`);
        response.then(res => res.json())
        .then( data  => 
            {
               
                if (data.error)
                {
                    setIsError(true);
                }
                else
                {
                    setIsError(false);
                    setData(data);
                }
            })
            .catch((error) => 
            {
            
            })
        
    }
  
    if (!isError)
    {
        return (
            <div className='page'>
                 <SearchBar setInputLocation={setInputLocation}></SearchBar>
                <ContentWrapper data = {data}></ContentWrapper>
            </div>
    
            );  
        
    }
    else 
    {
        return (
            
            <div className='page'>
                <SearchBar setInputLocation={setInputLocation}></SearchBar>
                <div>Khong</div>
            </div>
        )
    }
    
}
      
     
              