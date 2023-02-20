import {  Card, Space  } from 'antd';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import MainCard from '../../components/MainCard/maincard';
import SearchBar from '../../components/SearchBar/searchBar';
export default function Home () 
{
    const [data, setData] = useState([]);
    const [inputLocation, setInputLocation] = useState("VietNam");
    useEffect(() => {
        handleGetDataFromApi(inputLocation);
    }, [inputLocation])
    const handleGetDataFromApi = (inputLocation) => {
        const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=4acb30f8960e480c96131445230802&q=${inputLocation}&days=10&aqi=no&alerts=no`);
        response.then(res => res.json())
        .then( data  => {setData(data)});
    }
    useEffect (() => {
        console.log(data);
    }, [data])
        return (
            <>
            <SearchBar setInputLocation={setInputLocation}></SearchBar>
            <Row 
            style={{
               margin: '36px'
            
            }}
            >
                <Col span={8}>
                    <MainCard data = {data}></MainCard>
                </Col>
                <Col span={16}>
                    <Card title="Card"  style={{backgroundColor: '#9295e4', height: '350px'}}>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
          </>
        )

}