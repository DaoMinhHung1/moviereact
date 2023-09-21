import React, { useEffect, useState } from "react";
import "../../LayoutCss/home.css";

import { Layout, Row, Col, Card, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import Footter from "../../Component/Footter";
import MenuComponent from "../../Component/MenuComponent";
import Header from "../../Component/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách phim phổ biến
    axios
      .get("http://localhost:8000/api/flims")
      .then((response) => {
        const data = response.data;
        setTrendingMovies(data); // Cập nhật state với dữ liệu từ API
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Layout className="body main-layout">
        <MenuComponent />

        <Layout className="body content-layout">
          <Header />
          <Content>
            <Row className="align-items-center justify-content-center mt-5">
              <Card
                className="banner-card"
                style={{ backgroundImage: 'url("img/banner2.webp")' }}
              >
                <Col span={6}>
                  <div className="card-content">
                    <h3>Marvel Phần cuối</h3>
                    <p>
                      <span style={{ marginLeft: "5px" }}>
                        <FontAwesomeIcon
                          style={{ color: "red" }}
                          icon={faBookmark}
                        />{" "}
                        9.0
                      </span>
                      <span style={{ marginLeft: "15px" }}>
                        <FontAwesomeIcon
                          style={{ color: "red" }}
                          icon={faClock}
                        />{" "}
                        120 min
                      </span>
                      <span style={{ marginLeft: "15px" }}>
                        <FontAwesomeIcon
                          style={{ color: "red" }}
                          icon={faFlag}
                        />{" "}
                        FHD
                      </span>
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                    </p>
                  </div>
                </Col>
              </Card>
            </Row>
            <Row className="mt-5">
              <h3
                style={{
                  marginLeft: "250px",
                  borderLeft: "5px solid red",
                  paddingLeft: "10px",
                  color: "white",
                }}
              >
                Trending Movies
              </h3>
            </Row>
            <Row className="mt-5">
              {trendingMovies.map((movie, index) => (
                <React.Fragment key={movie.id}>
                  {index % 3 === 0 && <Col span={3}></Col>}
                  <Col key={movie.id} span={6} style={{ marginTop: "15px" }}>
                    <Card
                      className="poster"
                      style={{
                        backgroundImage: `url(http://localhost:8000/storage/images/${movie.image})`,
                      }}
                    >
                      <div className="card-content text text-center">
                        <h5>{movie.title}</h5>
                        <p>
                          <span style={{ marginLeft: "5px" }}>
                            <FontAwesomeIcon
                              style={{ color: "red" }}
                              icon={faBookmark}
                            />{" "}
                            9.0
                          </span>
                          <span style={{ marginLeft: "15px" }}>
                            <FontAwesomeIcon
                              style={{ color: "red" }}
                              icon={faClock}
                            />{" "}
                            120 min
                          </span>
                          <span style={{ marginLeft: "15px" }}>
                            <FontAwesomeIcon
                              style={{ color: "red" }}
                              icon={faFlag}
                            />{" "}
                            FHD
                          </span>
                        </p>
                        <Button>
                          <Link to={`/flim/${movie.id}`}>Xem phim</Link>
                        </Button>
                      </div>
                    </Card>
                  </Col>
                  {index % 3 === 2 && <Col span={3}></Col>}
                </React.Fragment>
              ))}
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

export default Home;
