import "./App.css";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "Eduardo Santos",
    email: "eduardo.santos@gmail.com",
    phone: "(48) 9294-9277",
    isAdmin: true,
  });

  const usersUrl = "http://localhost:3030/users";

  // Handles input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(usersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Obj criado no json-server: ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Update list after submit
    usersFetch();
  };

  // Handles user deletion
  const handleDeleteUser = (userId) => {
    const deleteUserUrl = `${usersUrl}/${userId}`;

    fetch(deleteUserUrl, {
      method: "DELETE",
    })
      .then(() => {
        // Update list after submit
        asyncGetUsers();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Fetch users list
  const usersFetch = () => {
    fetch(usersUrl, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useCallback to prevent async rerender problems in react
  const asyncGetUsers = useCallback(async () => {
    usersFetch(usersUrl);
  }, []);

  // useEffect to run asyncGetUsers in page render
  useEffect(
    () => {
      asyncGetUsers();
    },
    // useEffect declarations
    [asyncGetUsers]
  );

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "inline" }}>
          {/* POST FORM */}
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <label htmlFor="isAdmin">Admin:</label>
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleInputChange}
              />

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <ul
          style={{
            padding: "0",
            margin: "20px 0 0 0",
            listStyleType: "none"
          }}
        >
          {/* USERS LIST */}
          {users.map((element) => {
            return (
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                  padding: "4px",
                }}
                key={element.id}
              >
                <span>{element.name}</span>
                <span>{element.email}</span>
                <span>{element.phone}</span>
                <span>{element.isAdmin ? "Admin" : ""}</span>
                <button onClick={() => handleDeleteUser(element.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
