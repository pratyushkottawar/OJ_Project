import React from "react";

const Loginpage = () => {
  const handleOnClick = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <div>
      <button onClick={handleOnClick}> login with google</button>
    </div>
  );
};

export default Loginpage;
