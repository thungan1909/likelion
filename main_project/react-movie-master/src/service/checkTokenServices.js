import { checkIsAuthenticated } from "../utils/util";

export default function CheckTokenServices()
{
    const token = localStorage.getItem("token");
    const isHasToken = token && token.length > 0 ? checkIsAuthenticated(token) : false;
    if (isHasToken)
    {
        return true;
    }
    return false;
}