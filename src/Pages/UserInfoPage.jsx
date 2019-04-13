import React, { useState, useEffect } from "react";

export default function UserInfoPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`
      Username is ${username}
      Password Set? ${password.length > 0}
    `);
  });

  return (
    <>
      <input
        name="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </>
  );
}
