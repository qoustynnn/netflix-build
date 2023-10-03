import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "../features/counter/userSlice";
import Nav from "../components/nav";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen-body">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info">
          <img src="https://i.pinimg.com/236x/fe/85/b7/fe85b7ab9e5c2ff02a4972409daf2128.jpg" />
          <div className="profile-screen-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <h4>Renewal Date:</h4>
              <div className="profile-subscription-plans">
                <div className="profile-subscription-plan">
                  <p>
                    Netflix Standard <br /> <span>720p</span>
                  </p>{" "}
                  <button className="subscribe-btn">Subscribe</button>
                </div>
                <div className="profile-subscription-plan">
                  <p>
                    Netflix Basic <br/> <span>1080p</span>
                  </p>{" "}
                  <button className="subscribe-btn">Subscribe</button>
                </div>
                <div className="profile-subscription-plan">
                  <p>
                    Netflix Premium <br/> <span>4K+HDR</span>
                  </p>{" "}
                  <button className="subscribe-btn current-btn">Current Package</button>
                </div>
              </div>
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="sign-out-btn"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
