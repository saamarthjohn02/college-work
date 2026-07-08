import { Link } from "react-router-dom";
import "./TeacherRegister.css";

function TeacherRegister(){

return(

<div className="register-container">

<div className="register-card">

<h1>Teacher Registration</h1>

<form>

<input
type="text"
placeholder="Full Name"
required
/>

<input
type="email"
placeholder="Email"
required
/>

<input
type="text"
placeholder="Department"
required
/>

<input
type="password"
placeholder="Password"
required
/>

<button>

Register

</button>

</form>

<p>

Already have an account?

<Link to="/teacher-login">

Login

</Link>

</p>

</div>

</div>

)

}

export default TeacherRegister;