import { Navigate } from "react-router-dom";
import CheckTokenServices from "../../service/checkTokenServices";
export default function  RedirectHomePage({children})
{
   
    const isAuthenticated =  CheckTokenServices();
    if (isAuthenticated)
    {
        return <Navigate to = "/home" replace />
    }
    return children;
}
