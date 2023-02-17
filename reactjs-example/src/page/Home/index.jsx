import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap-v5";
import Title from '../../components/Title';
const myTheme = {
  light: {
    backgroundColor: '#FFF',
    color: 'black',
  },
  dark: {
    backgroundColor: '#000',
    color: '#FFF',
  }
}
export default function Home () 
{
     const [theme, setTheme] = useState(myTheme.light);
     

  function handleChangeTheme () {
        if(theme === myTheme.light) 
        {
          setTheme(myTheme.dark)
        }
        else setTheme(myTheme.light)
  }
  
//   const [posts, setPost] = useState([]);

//   useEffect (() => {
//     const response = fetch("https://jsonplaceholder.typicode.com/posts");
//     response.then(res => res.json())
//     .then( posts  => {
//       setPost(posts);
//     });
//   },[])



  const [inputValue, setInputValue] = useState();
  const count = useRef(0);
  useEffect (() => {
    count.current = count.current + 1;
  });

    return (

          
     <div className="page" style={theme} >
        {/* <Button onClick={handleChangeTheme}>Change Theme</Button> */}
        <Navbar></Navbar>
        <Hero></Hero>
        <Title title={"Home"}></Title>
    </div> 

     //  <ul>
                //     {posts.map(post => (
                //         <li key={post.id}>
                //             {post.title}
                //         </li>
                //     ))}
                    
                // </ul> 
     
    
    // <input value={inputValue} onChange = { (e) => setInputValue(e.target.value)} />
    // <h1>{count.current}</h1>
  
    )
}