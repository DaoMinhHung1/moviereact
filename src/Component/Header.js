import React from "react";
import { Layout, Row, Col } from "antd";
import "../LayoutCss/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Header = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/login");
  };
  return (
    <>
      <Row className="mt-3">
        <Col className="mt-3" span={8}>
          <div className="logo-container">
            <img className="logo" src="/img/logomu.png" alt="Logo" />
          </div>
        </Col>
        <Col className="mt-3" span={8}>
          <div className="input-container">
            <input
              style={{ backgroundColor: "#333333" }}
              className="input"
              placeholder="Search Your Movie..."
            />
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </div>
        </Col>
        <Col className="mt-3" span={8}>
          <div style={{ marginLeft: "300px" }} className="signin-container">
            <button className="button" onClick={() => handleSignup()}>
              SIGN IN
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
