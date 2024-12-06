import { Link } from 'react-router-dom'

export default function Success() {
  
  return (
    <div>
        <div style={{textAlign:"center"}}>
        <p className="b-3">Verification Complete</p>
          <p style={{ color: "green" }}>
          Thank you for verifying your details with us, You'll be redirected
            to the home page.
          </p>
          <Link to={"https://squareup.com/help/us/en/article/5062-sign-in-and-out-of-square-point-of-sale"}>Go home</Link>
        </div>
    </div>
  )
}
