import { createContext, useContext, useState } from "react";
const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <LoginContext.Provider
      value={{ userName, setUserName, showProfile, setShowProfile }}
    >
        
      {children}
    </LoginContext.Provider>
  );
}
