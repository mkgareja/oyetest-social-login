import React from 'react';
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  // console.log(response);
  console.log("Login Success: currentUser:", response);
  window.parent.postMessage({ message: "getAppData", value: response }, "*");
};


function App() {
  return (
    <div className="App">
      <GoogleLogin
        clientId="796074674147-bu1oat7714eglvljkdpo4hfmcghd1a8n.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
