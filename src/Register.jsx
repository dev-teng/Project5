import { Link, Outlet } from "react-router-dom"
function Register () {
  return (
    <div className="container-fluid p-5" style={{width: "50rem"}}>
    <div className="bg-danger-subtle p-5 m-5 rounded">
      <h3 className="text-center">Create an Account</h3>
      <p className="text-center mb-5 fs-5">Sign up here⬇️</p>
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="firstname">First Name</label>
          <input id="firstname" type="email" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <input id="lastname" type="email" className="form-control"></input>
        </div>
      </div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" className="form-control mb-3"></input>
      <label htmlFor="password">Password</label>
      <input id="password" type="email" className="form-control mb-3"></input>
      <label htmlFor="confirmpassword">Confirm password</label>
      <input id="confirmpassword" type="email" className="form-control mb-3"></input>
      <button className="btn btn-dark mt-3 mb-2">Login</button>
      <br></br>
      <Link to="/login">Already Have an Account? Login Here</Link>
    </div>
  </div>
  )
}

export default Register