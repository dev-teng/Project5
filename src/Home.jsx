import Sync from "./Sync";
import { useState, useEffect } from "react";
import firebaseApp from './firebaseConfig';
import { useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { getFirestore, addDoc, collection, Timestamp, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

function Home() {

  let navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({displayName:'', email:''});
  const [sync, setSync] = useState("");
  const db = getFirestore(firebaseApp);
  const [syncs, setSyncs] = useState([]);
  


  const [buttonLoading, setButtonLoading] = useState(false);
  

  useEffect(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setUserProfile({
          email: user.email,
          displayName: user.displayName
        });
      }else {
        navigate("/login");
      }
    });



    onSnapshot(collection(db, "syncs"), snapshot => {
      setSyncs(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})));

      
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
    if(sync !== '') {
      setButtonLoading(true)
      const syncData = {
        body: sync,
        user_email: userProfile.email, 
        displayName: userProfile.displayName,
        date_posted: Timestamp.now()
      }

      addDoc(collection(db, "syncs"), syncData).then(() => {
        setSync('');
        setButtonLoading(false)
      });

    }else {
      alert('Sync cannot be empty');
      setButtonLoading(false)
    }
   
  };


  const handleDelete = (syncId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will delete the post permanently!",
      icon: 'warning',
      confirmButtonColor: "#f8d7da",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(doc(db, "syncs", syncId))
          .then(() => {
            Swal.fire('Deleted!', 'The post has been deleted.', 'success');
          })
          .catch((error) => {
            Swal.fire('Error!', 'Something went wrong.', 'error');
          });
      }
    });
  };


  return (
    <div className="container-fluid p-5 bg-secondary-subtle d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="row mb-5">
        <div className="col-md-2 bg-danger-subtle p-3 rounded" style={{width: "14rem"}}>
          <h2 className="text-danger">Soul❣️Sync</h2>
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
          <button onClick={createSync} className="btn btn-outline-dark mt-3 ps-3 pe-3" disabled={buttonLoading}>
            {buttonLoading ? 
            (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            )
            :
            (
              "Sync"
            )
            }
          </button>
        </div>

        {
          syncs.map((syncRecord) => (
            <Sync 
              key={syncRecord.id}
              body={syncRecord.body}
              email={syncRecord.user_email}
              displayName={syncRecord.displayName}
              date_posted={syncRecord.date_posted.toDate().toString()}
              onDelete={() => handleDelete(syncRecord.id)}
            />
          ))
        }

        
      </div>
    </div>
  )
}

export default Home