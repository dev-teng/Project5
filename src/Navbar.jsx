import { Outlet, Link } from "react-router-dom";
function Navbar () {
  return(
    <>
    <Link to='/'></Link>
    <Outlet />
    </>
  )
}

export default Navbar