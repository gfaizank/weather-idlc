import React from 'react';
import Weather from './components/Weather';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/home' element={<Weather />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/signup' element={<SignUp />}></Route>
     </Routes>
    </BrowserRouter>
    // <Login />
    // <Weather />

    // <div>
    //   {/* <Weather /> */}
    //   {/* <SignUp /> */}
    // </div>
  );
}

export default App;
