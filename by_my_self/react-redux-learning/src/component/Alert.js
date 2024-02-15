import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Alert ()
{
    const alert = useSelector((state) => state.alert);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(alert.msg) 
        {
            setVisible(true);
            let timeOut = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timeOut); //clean up
        }
    }, [alert])
    return(
        <div id="alert"> 
           {visible && ( <h1 style={{color: alert.status ? "green": "red"}}>{alert.msg}</h1> )}
        </div>
    )
}