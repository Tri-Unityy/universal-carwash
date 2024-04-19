import React, { useState } from "react";


const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    // Check if the username and password match the expected values
    if (username === "Admin007" && password === "universalAdmin") {
      // Redirect to the /billGeneration page
      //history.push("/billGeneration");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ height: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="login-container" style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "300px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={form.username} onChange={handleChange} required style={{ width: "100%", padding: "8px", border: "1px solid #cccccc", borderRadius: "4px" }} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required style={{ width: "100%", padding: "8px", border: "1px solid #cccccc", borderRadius: "4px" }} />
          </div>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          <div className="form-group">
            <input type="submit" value="Login" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", border: "none", color: "#ffffff", borderRadius: "4px", cursor: "pointer" }} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
