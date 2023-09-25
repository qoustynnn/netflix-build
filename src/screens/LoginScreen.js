import React, { useState } from "react";
import "./loginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="loginScreen-bg">
        <img
          className="login-logo clickable"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FNetflix-Logo.png&f=1&nofb=1&ipt=3b73cc5695acf3cfb157a6584466c254873bdee1eafeac8fe68070d9c6668394&ipo=images"
          alt="netflix logo"
        />
        <button onClick={() => setSignIn(true)} className="login-screen-btn">
          Sign In
        </button>
        <div className="login-screen-gradient" />
      </div>
      <div className="login-screen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime. </h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login-screen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="get-started-btn"
                >
                  Get Started
                </button>
                
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
