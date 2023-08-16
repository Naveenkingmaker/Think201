import { useRoutes,Navigate } from "react-router-dom";
import LandingPage from "./Components/Landing page/Userlist";
import Profile from "./Components/Homepage/profile";
const Routes = () => {
const routes = [
    // {
    //   path: '/',
    //   element: <LandingPage />,
    //   children: [
        {path:'/userlist',element : <LandingPage />},
        {path:'/profile/:id',element:<Profile />},
        // {path:'/powerbi_asset_report',element:<PowerBI_Report />},
        // {path:'/powerbi_water_report',element:<PowerBI_Water />},
        { path: '/', element:  <Navigate to="/userlist" /> },
        { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
]
return useRoutes(routes);
}
export default Routes;