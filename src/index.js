import React from 'react';
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  // console.log(response);
  console.log("Login Success: currentUser:", response);
  window.parent.postMessage({ message: "getAppData", value: response }, "*");
  refreshTokenSetup(response);
};

const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log('newAuthRes:', newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    localStorage.setItem('authToken', newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
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
