import React, { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import './viewcomponent.css'
export default function Viewcomponent() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/details/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deletebtn = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/details/user/${userId}`);
      setUserData(userData.filter((user) => user._id !== userId));
      alert("User deleted successfully.");
    } catch (error) {
      console.log(error);
      alert("Failed to delete user.");
    }
  };
  return (
    <div className="card-container">
      {userData.map((user, index) => (
        <div className="card">
      <div className="card-content">
        <h2 className="card-title">{user.name}</h2>
        <p className="card-description">Gender: {user.gender}</p>
        <p className="card-description">
              Phone: {user.phone}</p>
        <p className="card-description">Email: {user.email}</p>
        <p className="card-description">Category: {user.category}</p>
        <p className="card-description">Tech:{user.tech.map((data)=>(
                <span>{data}</span>))}</p>
                
            {/* <Link to={'/'+user._id}>Update</Link>
            <button onClick={() => deletebtn(user._id)}> Delete </button> */}
            <div className="user-card-buttons">
        <Link to={`/${user._id}`} className="update-button">
          Update
        </Link>
        <button onClick={() => deletebtn(user._id)} className="delete-button">
          Delete
        </button>
      </div>
      </div>
    </div>
      ))}
    </div>
  );
}
