import { Text } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Text as={'h1'}>
        Welcome man!
      </Text>
      <Outlet />
    </>
  )
}

export default App
