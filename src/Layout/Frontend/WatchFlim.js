import { Card, Col, Layout, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import MenuComponent from "../../Component/MenuComponent";
import Header from "../../Component/Header";
import Footter from "../../Component/Footter";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";

const WatchFlim = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState("");

  useEffect(() => {
    // Gọi API để lấy chi tiết phim dựa trên id
    axios
      .get(`http://localhost:8000/api/flims/${id}`)
      .then((response) => {
        const data = response.data;
        setFilmDetail(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Layout className="body main-layout">
        <MenuComponent />
        <Layout className="body content-layout">
          <Header />
          <Content>
            <Row
              className="align-items-center justify-content-center"
              style={{ marginLeft: "-100px" }}
            >
              <Col span={3}></Col>
              <Col className="mt-5" span={15}>
                <Row>
                  <Card
                    style={{
                      backgroundColor: "black",
                      zIndex: "1",
                    }}
                    className="card-flim"
                  >
                    <iframe
                      style={{
                        margin: "10px",
                      }}
                      width="850"
                      height="450"
                      src={filmDetail.video}
                      title="Video"
                      bor
                      allowFullScreen
                    ></iframe>
                  </Card>
                </Row>
                <Row className="mt-5">
                  <Card className="card-flim">
                    <Comments />
                  </Card>
                </Row>
              </Col>
              {/* <Col className="mt-5" span={6}>
                <Card
                  style={{ backgroundColor: "#555555" }}
                  className="card-flim-oder"
                >
                  <div className="d-flex align-items-center">
                    <img className="poster-flim-oder" src="img/banner2.webp" />
                    <div className="ml-3">
                      <h6 style={{ color: "white", marginLeft: "5px" }}>
                        Marvel Phần Cuối
                      </h6>
                      <p style={{ color: "white", marginLeft: "5px" }}>2023</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-2">
                    <img className="poster-flim-oder" src="img/banner2.webp" />
                    <div className="ml-3">
                      <h6 style={{ color: "white", marginLeft: "5px" }}>
                        Marvel Phần Cuối
                      </h6>
                      <p style={{ color: "white", marginLeft: "5px" }}>2023</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-2">
                    <img className="poster-flim-oder" src="img/banner2.webp" />
                    <div className="ml-3">
                      <h6 style={{ color: "white", marginLeft: "5px" }}>
                        Marvel Phần Cuối
                      </h6>
                      <p style={{ color: "white", marginLeft: "5px" }}>2023</p>
                    </div>
                  </div>
                </Card>
              </Col> */}
            </Row>
            <Row className="mt-5">
              <Footter />
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default WatchFlim;
