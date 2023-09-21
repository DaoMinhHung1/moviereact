import React from "react";
import { Layout, Menu, Row, Col, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const Footter = () => {
  return (
    <>
      <Layout
        style={{
          backgroundImage: "url(/img/banner2.webp)",
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <Content>
          <Row className="text-center mt-5">
            <Col span={6}></Col>
            <Col span={12} className="">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                <span style={{ marginLeft: "0px" }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px", color: "red" }}
                    icon={faFacebook}
                  />
                </span>
                <span style={{ marginLeft: "20px" }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px", color: "red" }}
                    icon={faInstagram}
                  />
                </span>
                <span style={{ marginLeft: "20px" }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px", color: "red" }}
                    icon={faTwitter}
                  />
                </span>
              </p>
            </Col>
            <Col span={6}></Col>
          </Row>
          <Row className="text-center mt-5">
            <Col span={8}>
              <h6 style={{ color: "red" }}>Flix</h6>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </Col>
            <Col span={8}>
              <h6 style={{ color: "red" }}>Browse</h6>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </Col>
            <Col span={8}>
              <h6 style={{ color: "red" }}>Help</h6>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Footter;
