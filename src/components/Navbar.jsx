"use client";
import React, { useContext } from "react";
import "../styles/navbar.scss";
import Link from "next/link";
import { UserContext } from "@/utilities/UserContext";

export const categories = [
  "art",
  "science",
  "technology",
  "cinema",
  "design",
  "food",
];

const Navbar = () => {
  const { currentUser, signout } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="links">
          {categories.map((cat, idx) => (
            <Link href={`/?cat=${cat}`} key={idx} className="link">
              <h6>{cat.toUpperCase()}</h6>
            </Link>
          ))}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={signout}>Sign out</span>
          ) : (
            <Link className="link" href="/signin">
              Sign in
            </Link>
          )}
          <span className="write">
            <Link className="link" href="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
