"use client";
import React, { useState, useContext } from "react";
import "../styles/editProfile.scss";
import Link from "next/link";
import { UserContext } from "@/utilities/UserContext";

const EditProfile = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  const [inputs, setInputs] = useState({
    first_name: currentUser?.first_name || "",
    last_name: currentUser?.last_name || "",
    username: currentUser?.username || "",
    email: currentUser?.email || "",
  });

  const handleSubmit = async (e) => {};
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formFields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
  ];
  return (
    <div className="editProfile">
      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div className="field" key={field.name}>
            <label className={field.name} htmlFor={field.name}>
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.label}
              name={field.name}
              id={field.name}
              value={inputs[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button onClick={handleSubmit} type="submit">
          Update Profile
        </button>
        {/* {err && <p>{err}</p>}
        {success && <p>{success}</p>} */}
      </form>
    </div>
  );
};

export default EditProfile;