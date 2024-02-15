import { Navigate } from "react-router-dom";
import CheckTokenServices from "../../service/checkTokenServices";
export default function ProtectedAuthen({children})
{
    const isAuthenticated =  CheckTokenServices();
    if (!isAuthenticated)
    {
        return <Navigate to = "/login" replace />
    }
    return children;
}
