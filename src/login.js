import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./login.css";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";

const Login = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [java, setjava] = useState(false);
  const [css, setCss] = useState(false);
  const [python, setpython] = useState(false);
  const [html, setHtml] = useState(false);
  const [js, setJs] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("http://localhost:8000/details/getusers/" + id).then((response) => {
      const { data } = response;
      setName(data.name);
      setGender(data.gender);
      setEmail(data.email);
      setPhone(data.phone);
      setCategory(data.category);
      setjava(data.java)
    });
  }, [id]);
  const submitform = async (e) => {
    var tech = [];
    if (java) tech.push("java");
    if (css) tech.push("css");
    if (python) tech.push("python");
    if (html) tech.push("html");
    if (js) tech.push("js");
    const data = { name, gender, phone, email,category, tech };
    if (id) {
      await axios.put("http://localhost:8000/details/update/" + id, data);
      alert("User updated successfully");
      setRedirect(true);
    } else {
      const fetchData = await fetch("http://localhost:8000/details/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responsText = await fetchData.json();
      setRedirect(true);
      console.log(responsText);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlejavaChange = (e) => {
    setjava(e.target.checked);
  };
  const handleCssChange = (e) => {
    setCss(e.target.checked);
  };
  const handlepythonChange = (e) => {
    setpython(e.target.checked);
  };
  const handleHtmlChange = (e) => {
    setHtml(e.target.checked);
  };
  const handleJsChange = (e) => {
    setJs(e.target.checked);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleModalOpen();
  };

  if(redirect){
    return <Navigate to="/view"></Navigate>
  }
  return (
    <>
    <Navbar></Navbar>
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <span style={{ color: "aliceblue" }}>
          {name &&
            name.invalid &&
            name.touched &&
            "Please Enter the value first"}
        </span>
        <br />
        <div className="gender">
          <label id="gender">Gender</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <label htmlFor="male" id="male">
            Male
          </label>
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <label htmlFor="female" id="female">
            Female
          </label>
          <br />
          <span style={{ color: "aliceblue" }}>
            {gender &&
              gender.invalid &&
              gender.touched &&
              "Please Enter the value first"}
          </span>
          <br />
          <label className="phone">Phone No.</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Your Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <br />
          <span style={{ color: "aliceblue" }}>
            {phone &&
              phone.invalid &&
              phone.touched &&
              "Please Enter the value first"}
          </span>
          <br />
          <label className="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <span style={{ color: "aliceblue" }}>
            {email &&
              email.invalid &&
              email.touched &&
              "Please Enter the value first"}
          </span>
          <br />
          <label className="category">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC/ST">SC/ST</option>
          </select>
          <br />
          <br />
          <label className="Tech">Technologies</label>
          <br />
          <input
            type="checkbox"
            id="skill1"
            name="skill1"
            value="java"
            checked={java}
            onChange={handlejavaChange}
          />
          <label htmlFor="skill1">java</label>
          <br />
          <input
            type="checkbox"
            id="skill2"
            name="skill2"
            value="css"
            checked={css}
            onChange={handleCssChange}
          />
          <label htmlFor="skill2">CSS</label>
          <br />
          <input
            type="checkbox"
            id="skill3"
            name="skill3"
            value="python"
            checked={python}
            onChange={handlepythonChange}
          />
          <label htmlFor="skill3">python</label>
          <br />
          <input
            type="checkbox"
            id="skill4"
            name="skill4"
            value="html"
            checked={html}
            onChange={handleHtmlChange}
          />
          <label htmlFor="skill4">HTML</label>
          <br />
          <input
            type="checkbox"
            id="skill5"
            name="skill5"
            value="js"
            checked={js}
            onChange={handleJsChange}
          />
          <label htmlFor="skill5">JS</label>
          <br />
          <br />
          <button type="submit" onClick={handleModalOpen}>
            Check
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-body">
          <p>Name: {name}</p>
          <p>Gender: {gender}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Category: {category}</p>
          <span>
            Technologies-{java && <span>java</span>}
            {css && <spann>Css</spann>}
            {python && <span>python</span>}
            {html && <span>html</span>}
            {js && <span>js</span>}{" "}
          </span>
        </div>
        <div className="modal-footer">
          <button onClick={handleModalClose}>Close</button>
          <button type="submit" onClick={submitform}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  </>
  );
};

export default Login;
