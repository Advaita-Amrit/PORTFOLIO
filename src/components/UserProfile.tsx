import { useState, useEffect } from 'react';

export default function UserProfile() {
  // 1. Initialize state with the default value
  const [name, setName] = useState("advaita");

  useEffect(() => {
    // 2. Fetch the name from localStorage or client store here
    const storedName = localStorage.getItem("username") || "advaita";
    setName(storedName);
  }, []);

  return (
    <a>
      <span>{name}</span>
    </a>
  );
}
