import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/screens/SignUp';
import PrivateComp from './components/widgets/PrivateComp';

import Login from './components/screens/Login';
import Home from './components/screens/Home';
import AddProject from './components/screens/AddProject';
import AllProject from './components/screens/AllProjects';
import ApiURL from './components/GetUrl'
import SingleProject from './components/screens/SingleProject';
import MyProfile from './components/screens/UserProfile';
import NavbarDrawer from './components/screens/NavbarDrawer';
import UserProfile from './components/screens/UserProfile';


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

  // const auth = JSON.parse(localStorage.getItem('user'));


  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}

        {/* {auth ? <NavbarDrawer /> : null} */}
        <NavbarDrawer />
        {/* <h1>Project Gallery</h1> */}

        <Routes>

          <Route element={<PrivateComp />} >
            <Route path='/' element={<Home />} />
            <Route path='/allprojects' element={<AllProject />} />
            <Route path='/addprojects' element={<AddProject />} />
            <Route path='/updateproject' element={<SingleProject />} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<MyProfile />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/project/get/:projectId" element={<SingleProject />} />
          </Route >

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
