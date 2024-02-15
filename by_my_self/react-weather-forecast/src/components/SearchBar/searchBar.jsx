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
        
             <Search placeholder="input search text" style={{width: '400px', height: '50px', margin: '16px'}} onSearch={onSearch} enterButton />   
    
    )
}