import { useState } from 'react';

export default function Conditional() {
  const [loggedIn, setLoggedIn] = useState(false);
  let button, message;

  if (!loggedIn) {
    message = <h1>Please Login to continue...</h1>;
    button = <button onClick={() => setLoggedIn(true)}>Login</button>;
  } else {
    message = <h1>Welcome Guest</h1>;
    button = <button onClick={() => setLoggedIn(false)}>Logout</button>;
  }

  return (
    <>
      {message}
      <br/>
      {button}
  </>
  );
}
 
/*import { useState } from 'react';

export default function Conditional() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <>
          <h1>Welcome Guest</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please Login to continue...</h1>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </>
      )}
    </>
  );
}*/