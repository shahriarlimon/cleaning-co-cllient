import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
export const PubliceRoutes = [
    {
        path:'/', name:'Home', Component: Home
    },
    {
        path:'/contact', name:'Contact', Component: Contact
    },
    {
        path:'/login', name:'Login', Component: Login
    },
]