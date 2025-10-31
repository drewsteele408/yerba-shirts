import {Outlet} from "react-router-dom"
import NavBar  from "./components/Navbar"

export default function App(){
  return(
    <>
    <NavBar />
    <div>
      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}
