import React from "react";
import Link from "next/link";
import { logoutUser } from "../lib/auth";

const Layout = ({ children, title, auth }) => {
  const { user = {} } = auth || {};
  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>{user.name}</strong>
        </span>
      </nav>
      <div>
        {user.name ? (
          <React.Fragment>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            <button onClick={() => logoutUser()}>Logout</button>
          </React.Fragment>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        a {
          margin-right: 0.5em;
        }
        button {
          text-decoration: underline;
          padding: 0%;
          font: inherit;
          cursor: pointer;
          border-style: none;
          color: rgb(0, 0, 238);
        }
      `}</style>
      <style global jsx>{`
        body,
        html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Layout;
