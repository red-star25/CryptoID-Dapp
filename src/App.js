import React from 'react';
import './App.css';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="app">
        <div className="app__container">
          <h1>CRYPTO ID</h1>
          <div className="app__button">
            <Link style={{ textDecoration: 'none',color:"black" }} to="/login">
            <Button 
            style={{
              fontSize:"16px",
              padding:"5px 40px"
            }}
            variant="contained" 
            color="primary">
              Login
            </Button>
            </Link>
           
            <Link style={{ textDecoration: 'none' ,color:"black"}} to="/register">
            <Button 
            style={{
              fontSize:"16px",
              padding:"5px 20px"
            }}
            variant="outlined" 
            color="primary">
              Register
            </Button>
            </Link>
          </div>
        </div>
          <span style={{fontSize:"12px"}}>Designed & Developed By</span>
          <p>Dhruv Nakum & AbdulBasit Hakimi</p>
          <br/>
          <p>©All rights reserved 2020</p>
    </div>
  );
}

export default App;
