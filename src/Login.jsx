import firebaseApp from './firebaseConfig';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import Swal from 'sweetalert2'
function Login () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if(user){
        navigate("/")
      }
    });
  }, [])

  const handleLogin = () => {
    if(email !== "" && password !== ""){
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
        navigate("/");

        Swal.fire({
          title: "Logged in!",
          icon: "success",
          confirmButtonColor: "#f8d7da"
        });

      }).catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Invalid Email and Password",
          icon: "error",
          confirmButtonColor: "#dc3545"
        });
      });

    }else {
      Swal.fire({
              title: "Error!",
              text: "Missing fields or Incorrect password and email. Please try again!",
              icon: "error",
              confirmButtonColor: "#dc3545"
            });
    }
  }


  return(
    <div className="container-fluid p-5" style={{width: "50rem"}}>
      <div className="bg-danger-subtle p-5 m-5 rounded">
        <h1 className="text-center">Welcome to Soul❣️Sync</h1>
        <p className="text-center">Your perfect match is just a click away 💓.</p>
        <h4 className="text-secondary">Login to your account</h4>
        <label htmlFor="email">Email</label>
        <input id="email" onChange={(e) => {
          setEmail(e.target.value)
          }} 
          value={email}
          type="email" className="form-control"
        />

        <label htmlFor="password">Password</label>
        <input id="password" onChange={(e) => {
          setPassword(e.target.value)
          }} 
          value={password}
          type="password" className="form-control"
        />

        <button onClick={handleLogin} className="btn btn-dark mt-3 mb-2">Login</button> 
        <br></br>
        <Link to="/register">Don't Have Account? Register Here</Link>
      </div>
    </div>
    
  )
}

export default Login