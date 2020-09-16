import React, { useState,useEffect } from 'react'
import "./Login.css"
import SchoolIcon from '@material-ui/icons/School';
import BusinessIcon from '@material-ui/icons/Business';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Web3 from "web3"



function Login() {

    const [instituteName,setInstituteName] = useState("")
    const [instituteAddress,setInstituteAddress]= useState("")

    const ethEnabled = () => {
        if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
          window.ethereum.enable();
          return true;
        }
        return false;
      }

      useEffect(()=>{
          if(!ethEnabled()){
            alert("Please install MetaMask to use this dApp!");
          }
      
    },[])

    const onFormSubmit = (e)=>{
        
    }

    const handleAddressChange = (e)=>{
        setInstituteAddress(e.target.value)
    }

    const handleNameChange = (e)=>{
        setInstituteName(e.target.value)
    }

    return (
        <div className="login">
            <form onSubmit={onFormSubmit} className="login__container">
                <h1>Login</h1>
                <div className="login__input">
                    <div className="address">
                    <BusinessIcon style={{marginRight:"10px"}}/>
                    <TextField
                    className="textfield"
                    value={instituteAddress}
                    onChange={handleAddressChange}
                     label="Enter Institute Address" />
                    </div>
                    <div className="name">
                    <SchoolIcon style={{marginRight:"10px"}}/>
                    <TextField
                    className="textfield"
                    value={instituteName}
                    onChange={handleNameChange}
                     label="Enter Institute Name" />
                    </div>
                </div>
                <div className="login__button">
                <Link style={{ textDecoration: 'none',color:"black" }} to={{
                    pathname:"/home",
                    instituteName:{instituteName},
                    instituteAddress:{instituteAddress}
                }} >
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
                </div>
            <Link style={{ textDecoration: 'none',color:"black" }} to="/register">
                    <p>Dosen't have an account ?</p>
                </Link>
            </form>
        </div>
    )
}

export default Login
