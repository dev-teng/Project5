import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Login';
import Register from './Register';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
