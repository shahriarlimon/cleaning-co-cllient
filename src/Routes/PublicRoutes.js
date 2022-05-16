import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
export const PubliceRoutes = [
    {
        path:'/', name:'Home', Component: Home
    },
    {
        path:'/about', name:'About', Component: About
    },
    {
        path:'/services', name:'Services', Component: Services
    },
    {
        path:'/contact', name:'Contact', Component: Contact
    },
    {
        path:'/login', name:'Login', Component: Login
    },
]