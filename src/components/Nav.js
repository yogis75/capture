import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line2
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
          <Line
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line2
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
          <Line
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line2
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
          <Line
            transition={{ dutaion: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "45%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100vw;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    @media (max-width: 1300px) {
      padding-top: 1rem;
      justify-content: space-between;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
    @media (max-width: 1300px) {
      padding: 1rem 0 0 0;
      justify-content: space-between;
    }
  }
  @media (max-width: 1300px) {
    display: block;
    h1 {
      text-align: center;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%auto;
  left: 60%;
  visibility: visible;
  @media (max-width: 1300px) {
    left: 0;
    visibility: hidden;
  }
`;
const Line2 = styled(motion.div)`
  visibility: hidden;
  @media (max-width: 1300px) {
    height: 0.3rem;
    background: #23d997;
    width: 0;
    position: absolute;
    bottom: -80%auto;
    left: 0;
    visibility: visible;
  }
`;
export default Nav;
