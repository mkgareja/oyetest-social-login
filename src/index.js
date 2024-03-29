import React from "react";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
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
    console.log("newAuthRes:", newAuthRes);
    // saveUserToken(newAuthRes.access_token);  <-- save new token

    localStorage.setItem("authToken", newAuthRes.id_token);

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};

function App() {
  return (
    <div className="App" style={{ display: "inline-block" }}>
      <GoogleLogin
        clientId="796074674147-bu1oat7714eglvljkdpo4hfmcghd1a8n.apps.googleusercontent.com"
        render={(renderProps) => (
          <div
            onClick={renderProps.onClick}
            style={{
              display: "flex",
              alignItems: "center",
              width: 195,
              color: "#333333",
              border: "1px solid #E0E0E0",
              borderRadius: 4,
              padding: "14px 10px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif",
              cursor: "pointer",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/img/g-logo.png"}
              alt="google logo"
              style={{
                height: 18,
                width: 18,
                marginRight: 15,
              }}
            />
            Continue with Google
          </div>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
