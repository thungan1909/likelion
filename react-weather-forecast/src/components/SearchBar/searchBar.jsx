import { Input, Space } from "antd";
import { useEffect, useState } from "react";
const { Search } = Input;
export default function SearchBar ({setInputLocation}) 
{

    const [searchInput, setSearchInput] = useState("VietNam");

   
    useEffect (() => {
        setInputLocation(searchInput);
    }, [searchInput])
    const onSearch = (value) => {
        setSearchInput(value);
      
    }
    return (
        <Space direction="vertical">
        <Search placeholder="input search text" size="large" onSearch={onSearch} enterButton />

    
       
      </Space>
    )
}