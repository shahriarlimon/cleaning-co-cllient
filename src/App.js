import { Route, Routes } from "react-router-dom";
import { PubliceRoutes } from "./Routes/PublicRoutes";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
import Navbar from "./Components/Navbar/Navbar";
import AdminRoute from "./Components/Authentication/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Navbar>
        <Routes>
          {PubliceRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<ProtectedRoute />}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          </Route>
          <Route element={<AdminRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
