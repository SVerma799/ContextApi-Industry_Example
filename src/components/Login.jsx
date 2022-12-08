import React from "react";
import { useLoginContext } from "../context/UserContext";
import Profile from "./Profile";

export default function Login() {
  const { setUserName, showProfile, setShowProfile } = useLoginContext();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {showProfile ? (
        <Profile />
      ) : (
        <>
          <h1>Login Page</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              placeholder="username"
              width="100px"
              onChange={(e) => {
                e.preventDefault();
                setUserName(e.target.value);
              }}
            />
            <input type="password" placeholder="password" width={100} />
            <button
              onClick={(e) => {
                setShowProfile(true);
              }}
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
}
