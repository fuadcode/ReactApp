import React from "react";
import UserForm from "./components/UserForm/index";

function App() {
  const fullName = <input type="text" placeholder="Full Name" />;
  const lastName = <input type="text" placeholder="Last Name" />;
  const email = <input type="email" placeholder="Email" />;
  const password = <input type="password" placeholder="Password" />;
  const age = <input type="number" placeholder="Age" min="0" />;
  const submit = <input type="text" value="Submit" />;

  return (
    <div>
      <UserForm
        fullName={fullName}
        lastName={lastName}
        email={email}
        password={password}
        age={age}
        submit={submit}
      />
    </div>
  );
}

export default App;
