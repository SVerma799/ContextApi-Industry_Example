import React from "react";
import { useLoginContext } from "../context/UserContext";

export default function Profile() {
  const { userName } = useLoginContext();
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}
