
import { Navigate } from "react-router-dom";
import ProtectAuthen from "./page/Authen/ProtectedAuthen";
import RedirectHomePage from "./page/Authen/RedirectHomePage";
import FilmDetail from "./page/FilmDetail/filmDetail";
import HomePage from "./page/Homepage/homePage";
import NewList from "./page/List/NewList/newList";
import Login from "./page/Login/login";
import NotFound from "./page/NotFound/notFound";
import Register from "./page/Register/register";
import SearchResult from "./page/SearchResult/searchResult";
const routes = [
    {
        key: 'default',
        name: "Default",
        route: '/',
        component: 
        // <ProtectAuthen>
            <HomePage/>
        // </ProtectAuthen>
    },
    {
        key: "login",
        name: "Login",
        route: "/login",
        component: <Login/>
        // <RedirectHomePage>
            
        // </RedirectHomePage> 
    },
    // {
    //     key: "register",
    //     name: "Register",
    //     route: "/register",
    //     component:
    //     // <RedirectHomePage>
    //          <Register/>
    //     // </RedirectHomePage>
    // },
    {
        key: "home",
        name: "Home",
        route: "/home",
        component: 
        // <ProtectAuthen>
            <HomePage/>
        // </ProtectAuthen>
    },
    {
        key: "film-detail",
        name: "FilmDetail",
        route: "filmDetail/:id",
        component: 
        // <ProtectAuthen>
            <FilmDetail/>
    //    </ProtectAuthen>
    },
    {
        key: "search-result",
        name: "SearchResults",
        route: "/searchResults",
        component: 
        // <ProtectAuthen>
            <SearchResult/>
        // </ProtectAuthen>
    },
    {
        key: "newlist",
        name: "new List",
        route: "/list/new",
        component: <NewList></NewList>
    },
    {
        key: "notFound",
        name: "Not Found",
        route: "*",
        component: 
            <NotFound/>
    },
  
  
];
export default routes;