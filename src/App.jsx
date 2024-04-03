
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home1 from './Components/Home/Home1'
import Layout from './Layout'
import Who from './Components/Company/Who'
import News from './Components/Company/News'
import Company_Contact from './Components/Company/Company_Contact'
import Legal from './Components/Company/Legal'
import LeaderShip from './Components/Company/LeaderShip'
import Company_main from './Components/Company/Company_main'
import Resource from './Components/Resource/Resource'
import Contact_con from './Components/Contact/Contact_con'
import Careers from './Career/Careers'
import White_Papers from './Components/Resource/White_Papers'
import Videos from './Components/Resource/Videos'
import Case_Studies from './Components/Resource/Case_Studies'
import OpenRAN from './Components/Resource/OpenRAN'
import Webinars from './Components/Resource/Webinars'
import Blog from './Components/Resource/Blog'
import Solution from './Components/Solutions/Solution'
import Product from './Product/Product'
import Costomer from './Costmer/Costomer'
import Mission from './Components/Company/Mission'



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home1/>
    },
    {
      path:"/",
      element: <Layout />,
     
      children: [
        {
          path:"/who",
          element:<Who/>
        },
        {
          path:"/news",
          element:<News/>
        },
        {
          path:"/leader",
          element:<LeaderShip/>
        },
       
        {
          path:"/concact",
          element:<Company_Contact/>
        },
        {
          path:"/partener",
          element:<Legal/>
        },
        {
          path:"/Company",
          element:<Company_main/>
        },
        {
          path:"/resource",
          element:<Resource/>
        },
        {
          path:"/con",
          element:<Contact_con/>
        },
        {
          path:"/carer",
          element:<Careers/>
        },
        {
          path:"/white",
          element:<White_Papers/>
        },
        {
          path:"/solu",
          element:<Solution/>
        },
        {
          path:"/video",
          element:<Videos/>
        },
        {
          path:"/case",
          element:<Case_Studies/>
        },
        {
          path:"/openran",
          element:<OpenRAN/>
        },
        {
          path:"/webinars",
          element:<Webinars/>
        },
        {
          path:"/blod",
          element:<Blog/>
        },
       
        {
          path:"/product",
          element:<Product/>
        },
        {
          path:"/cost",
          element:<Costomer/>
        },
        {
          path:"/mission",
          element:<Mission/>
        },
       
      ]
    },

    
  ])

  return (
    <>
    

      <RouterProvider router={router} />


    </>
  )
}

export default App
