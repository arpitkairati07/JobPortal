import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
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
  ])
  return (
    <div>
    <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App
