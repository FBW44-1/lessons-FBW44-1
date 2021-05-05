import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/sign");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="Home">
      <h1>Welcome To Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
