
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Workout from "../pages/Workout"
import Login from "../pages/Login"
import Error from "../pages/Error"

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "workout",
                element: <Workout />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
        ]
    }
])

function Routes() {
  return (
    <RouterProvider router={routes} />
  )
}

export default Routes