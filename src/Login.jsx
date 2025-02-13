import { Link} from "react-router-dom";
function Login () {
  return(
    <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="bg-danger-subtle p-5 m-5 rounded">
        <h1 className="text-center">Welcome to Soul+Sync</h1>
        <p className="text-center">Your perfect match is just a click away 💓.</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="form-control"></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="email" className="form-control"></input>
        <button className="btn btn-dark mt-3 mb-2">Login</button> 
        <br></br>
        <Link to="/register">Don't Have Account? Register Here</Link>
      </div>
    </div>
    
  )
}

export default Login