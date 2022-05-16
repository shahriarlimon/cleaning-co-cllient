import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import {PubliceRoutes} from './Routes/PublicRoutes';
function App() {
  return (
    <div className="">
     <Navbar>
       <Routes>
         {
           PubliceRoutes.map(({path,Component}, index)=><Route key={index} path={path} element={<Component/>}/> )
         }
       </Routes>
     </Navbar>
    </div>
  );
}

export default App;
