import Sync from "./Sync";
import { useState, useEffect } from "react";
import firebaseApp from './firebaseConfig';
import { useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2'

function Home() {

  let navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({displayName:'', email:''});
  const [sync, setSync] = useState("");
  const db = getFirestore(firebaseApp);

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setUserProfile({
          email: user.email,
          displayName: user.displayName
        })
      }else {
        navigate("/login");
      }
    });
  }, [])

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      confirmButtonColor: "#f8d7da",
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const auth = getAuth(firebaseApp)
        signOut(auth).then(() => {
        navigate("/login");
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Logout Cancelled');
      }
    });
    
  };

  const createSync = () => {
    alert('Sync');
  }


  return (
    <div className="container-fluid p-5 bg-secondary-subtle d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="row mb-5">
        <div className="col-md-2 border p-2" style={{width: "14rem"}}>
          <h1 className="text-danger">Soul+Sync</h1>
          <div className="card-body d-grid">
            <span>{userProfile.displayName}</span>
            <span>{userProfile.email}</span>
            <button onClick={logout} className="btn btn-secondary d-grid mt-3">Logout</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 border p-3 bg-danger-subtle">
          <p>What's on your mind?🤯</p>
          <input type="text" onChange={(e) => {
            setSync(e.target.value)
            }}
            value={sync}
            className="form-control" 
          />
          <button onClick={createSync} className="btn btn-outline-dark mt-3 ps-3 pe-3">Sync</button>
        </div>

        <Sync />
      </div>
    </div>
  )
}

export default Home