import { Link} from "react-router-dom";
import firebaseApp from './firebaseConfig';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useState } from "react";
function Register () {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = () => {
    if(firstname !== "" && 
      lastname !== "" && 
      email !== "" && 
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ){
      alert("registration successfull!");
    }else {
      alert("There are errors in the registration process. Please try again later.")
    }
  }


  return (
  <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="bg-danger-subtle p-5 m-5 rounded">
          <h3 className="text-center">Create an Account</h3>
          <p className="text-center mb-5 fs-5">Sign up here⬇️</p>
          <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input id="firstname"
                  onChange={(e) =>{
                  setFirstname(e.target.value)
                  }}
                  value={firstname}
                  type="text" className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input id="lastname" 
                  onChange={(e) => {
                  setLastname(e.target.value)
                  }} 
                  value={lastname}
                  type="text" className="form-control"
                />
              </div>
          </div>

          <div>
              <label htmlFor="email">Email</label>
              <input id="email" 
                onChange={(e) => {
                setEmail(e.target.value)
                }} 
                value={email}
                type="email" className="form-control mb-3"
              />

              <label htmlFor="password">Password</label>
              <input id="password" onChange={(e) => {
                setPassword(e.target.value)
                }} 
                value={password}
                type="password" className="form-control mb-3"
              />

              <label htmlFor="confirmpassword">Confirm password</label>
              <input id="confirmpassword" 
                onChange={(e) => {
                setConfirmPassword(e.target.value)
                }}
                value={confirmPassword}
                type="password" className="form-control mb-3"
              />

              <button onClick={handleRegistration} className="btn btn-dark mt-3 mb-2">Create Account</button>
              <br></br>
              <Link to="/login">Already Have an Account? Login Here</Link>
          </div>
      </div>
  </div>
  )
}

export default Register