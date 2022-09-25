import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

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
