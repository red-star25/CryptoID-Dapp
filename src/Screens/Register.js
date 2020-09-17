import React, { useState,useEffect } from 'react'
import "./Register.css"
import SchoolIcon from '@material-ui/icons/School';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import web3 from '../web3';
import Web3 from "web3"
import cryptoid from "../crpytoid";
import { useHistory } from "react-router-dom";

function Register() {

    const [instituteName,setInstituteName] = useState("")
    const history = useHistory()

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
        //   else{
        //       alert("connected");
        //   }
    },[])

    
    const onFormSubmit = async(e)=>{
        const accounts = await web3.eth.getAccounts();
        console.log('Sending from Metamask account: ' + accounts);
       if(instituteName){
       await cryptoid.methods.registerInstitute(instituteName).send({
            from: accounts[0] 
        }, (error, transactionHash) => {
            console.log(`Transaction Hash : ${transactionHash}`);
            if(transactionHash){
                alert("Registration Completed")
                history.push("/login")
            }else{
                alert("Registration Failed")
            }
            //setTransactionHash({transactionHash});
        });
        
    }
    else{
        alert("Please enter Institute Name")
    }
    }


    const handleNameChange = (e)=>{
        setInstituteName(e.target.value)
    }

    return (
        <div className="register">
            <div className="register__container">
                <h1>Register</h1>
                <form onSubmit={onFormSubmit}  className="register__input"> 
                    <div className="name">
                    <SchoolIcon style={{marginRight:"10px"}}/>
                    <TextField
                    className="textfield"
                    value={instituteName}
                    onChange={handleNameChange}
                     label="Enter Institute Name" />
                    </div>
                </form>
                <div className="register__button">
                <Link style={{ textDecoration: 'none',color:"black" }} to={{
                    pathname:"/login",
                    instituteName:{instituteName},
                }} >
                    <Button 
                    onClick={onFormSubmit}
                        type="submit"
                        style={{
                            fontSize:"16px",
                            padding:"5px 40px"
                        }}
                        variant="contained" 
                        color="primary">
                        Register
                    </Button>
                    </Link>
                </div>
                <Link style={{ textDecoration: 'none',color:"black" }} to="/login">
                    <p>Already have an account ?</p>
                </Link>
            </div>
        </div>
    )
}

export default Register
