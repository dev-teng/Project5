import Sync from "./Sync";
import { useState, useEffect } from "react";
import firebaseApp from './firebaseConfig';
import { useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

function Home() {

  let navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, (user)=> {
      if(user){

      }else {
        navigate("/login");
      }
    });
  }, [])

  const logout = () => {
    const auth = getAuth(firebaseApp)
    signOut(auth).then(() => {
      navigate("login");
    });
  }


  return (
    <div className="container-fluid p-5 bg-secondary-subtle d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="row mb-5">
        <div className="col-md-2 border p-2" style={{width: "14rem"}}>
          <h1 className="text-danger">Soul+Sync</h1>
          <div className="card-body d-grid">
            <span>Username</span>
            <span>teng@test.com</span>
            <button onClick={logout} className="btn btn-secondary d-grid mt-3">Logout</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle">
          <p>What's on your mind?🤯</p>
          <input type="text" className="form-control" />
          <button className="btn btn-outline-dark mt-3 ps-3 pe-3">Sync</button>
        </div>

        <Sync />
      </div>
    </div>
  )
}

export default Home