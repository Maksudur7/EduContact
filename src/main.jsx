import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routs/Home.jsx';
import CollageFetcher from './Routs/CollageFetcher/CollageFetcher.jsx';
import Admission from './Routs/Admission/Admission.jsx';
import MyCollage from './Routs/MyCollage/MyCollage.jsx';
import CollegeDetails from './Routs/CollegeDetails/CollegeDetails.jsx';
import CollegeFormPage from './Routs/CollegeFormPagek/CollegeFormPage.jsx';
import OverView from './Routs/CollegeDetails/collageDetailsOutlet/OverView.jsx';
import CollageEvent from './Routs/CollegeDetails/collageEvent/CollageEvent.jsx';
import Recharge from './Routs/CollegeDetails/Recharge/Recharge.jsx';
import Sports from './Routs/CollegeDetails/Sports/Sports.jsx';
import AdmissionForm from './Routs/Admission/AdmissionForm/AdmissionForm.jsx';
import Login from './Routs/Authintication/Login paige/Login.jsx';
import Regstation from './Routs/Authintication/Regstation paige/Regstation.jsx';
import AuthProvider from './Routs/Authintication/AuthProvider file/AuthProvider.jsx';
import NotFound from './Routs/NotFound/NotFound.jsx';
import PrivateRoute from './Routs/PrivateRoute/PrivateRoute.jsx';
import Profile from './Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collages",
        element: <CollageFetcher></CollageFetcher>
      },
      {
        path: "/admission",
        element: <PrivateRoute><Admission></Admission></PrivateRoute>
      },
      {
        path: "/myCollage",
        element: <PrivateRoute><MyCollage></MyCollage></PrivateRoute>
      },
      {
        path: "/collageDetails",
        element:  <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute> ,
        children: [
          {
            path: '/collageDetails',
            element: <PrivateRoute><OverView></OverView></PrivateRoute>
          },
          {
            path: '/collageDetails/events',
            element: <PrivateRoute><CollageEvent></CollageEvent></PrivateRoute>
          },
          {
            path: '/collageDetails/research',
            element: <PrivateRoute><Recharge></Recharge></PrivateRoute>
          },
          {
            path: '/collageDetails/sports',
            element: <PrivateRoute><Sports></Sports></PrivateRoute>
          },
        ]
      },
      {
        path: "/addCollage",
        element: <CollegeFormPage></CollegeFormPage>
      },
      {
        path: "/admissionForm",
        element: <PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>
      },

    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/regstation",
    element: <Regstation></Regstation>
  },
  {
    path:"/profile",
    element: <Profile></Profile>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
