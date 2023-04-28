import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/widgets/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/screens/SignUp';
import PrivateComp from './components/widgets/PrivateComp';

import Login from './components/screens/Login';
import Home from './components/screens/Home';
import AddProject from './components/screens/AddProject';
import AllProject from './components/screens/AllProjects';
import ApiURL from './components/GetUrl'
<<<<<<< HEAD
import SingleProject from './components/screens/SingleProject';
=======
import UserPage from './components/screens/UserProfile';
import ProjectDetail from './components/screens/ProjectDetail';
>>>>>>> 01ae84bd14fd368a095f59783f35559913801d99




function App() {

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${ApiURL}/test`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // do something with the result
    };

    fetchData();
  }, []);


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
            <Route path='/updateproject' element={<SingleProject/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/project/get/:projectId" element={<ProjectDetail />} />
          </Route >

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
