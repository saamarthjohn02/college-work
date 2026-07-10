import React, { useState, useEffect } from "react";

function GetData() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const fetchData = await fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
      headers: {
        "x-api-key": "reqres_3ff78a12be124e9ba9a03eac93e306af",
        "content-type": "application/json",
      },
    });

    const res = await fetchData.json();
    setData(res.data);
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    alert(`Email: ${email}\nPassword: ${password}`);

    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Login Form</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <hr />

      <h2>User Data</h2>

      {loader ? (
        <h3>Loading...</h3>
      ) : (
        data.map((val) => (
          <div key={val.id}>
            <h3>ID: {val.id}</h3>
            <p>Email: {val.email}</p>
            <img src={val.avatar} alt={val.first_name} />
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default GetData;