import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleDecrement = ()=>{

  }
  function handleSubmit(x){
    x.preventDefault()
    console.log({email:email,password:password})
    localStorage.setItem("users",JSON.stringify({email:email,password:password}))
  
  }

let data =localStorage.getItem("users")
let json=JSON.parse(data);
console.log(json.email)

  return (
  
    
    <div>
      <h2>Project Name is Headphone</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default State;