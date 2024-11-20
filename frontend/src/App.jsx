import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
function App() {
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/jobs',
      element:<Jobs/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/description/:id',
      element:<JobDescription/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
  ])
  return (
    <div>
    <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
