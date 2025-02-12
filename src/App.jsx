import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
