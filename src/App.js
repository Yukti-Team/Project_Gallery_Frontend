import React from 'react';
import './App.css';
import NavBar from './components/widgets/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/screens/SignUp';
import PrivateComp from './components/PrivateComp';
import Login from './components/screens/Login';
import Home from './components/screens/Home';
import AddProject from './components/screens/AddProject';
import AllProject from './components/screens/AllProjects';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        {/* <h1>Project Gallery</h1> */}

        <Routes>

          <Route element={<PrivateComp />} >
            <Route path='/' element={<Home />} />
            <Route path='/allprojects' element={<AllProject />} />
            <Route path='/addprojects' element={<AddProject />} />
            <Route path='/updateproject' element={<h1>Update Project</h1>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route >



          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
