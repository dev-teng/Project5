import { Link, useNavigate} from "react-router-dom";
import firebaseApp from './firebaseConfig';
import {getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged} from "firebase/auth";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
function Register () {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user)=> {
      if(user){
        navigate("/");
      }
    });
  }, [])

  const handleRegistration = () => {
    if(displayName !== "" && 
      email !== "" && 
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ){

      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: displayName
          });

          navigate("/");
        });

      Swal.fire({
        title: "Registration!",
        text: "Success!",
        icon: "success",
        confirmButtonColor: "#f8d7da"
      });
    }else {
      Swal.fire({
        title: "Error!",
        text: "There are errors in the registration process. Please try again later!",
        icon: "error",
        confirmButtonColor: "#dc3545"
      });
    }
  }


  return (
  <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="bg-danger-subtle p-5 m-5 rounded">
          <h3 className="text-center">Create an Account</h3>
          <p className="text-center mb-5 fs-5">Sign up here⬇️</p>
          <div className="row mb-4">
              <div className="col-md-12">
                <label htmlFor="displayname">Name</label>
                <input id="displayname"
                  onChange={(e) =>{
                  setDisplayName(e.target.value)
                  }}
                  value={displayName}
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