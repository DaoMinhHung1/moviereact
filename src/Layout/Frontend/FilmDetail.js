import React, { useEffect, useState } from "react";
import Header from "../../Component/Header";
import MenuComponent from "../../Component/MenuComponent";
import { Layout, Row, Col, Card, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

import "../../LayoutCss/flimdetail.css";
import Footter from "../../Component/Footter";
import { Link, useParams } from "react-router-dom";

const FilmDetail = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState("");
  const [filmfull, setFilmfull] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách phim phổ biến
    axios
      .get("http://localhost:8000/api/flims")
      .then((response) => {
        const data = response.data;
        setFilmfull(data); // Cập nhật state với dữ liệu từ API
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Này là gọi bộ phim được chọn
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

  console.log(filmDetail);

  return (
    <>
      <Layout className="body main-layout">
        <MenuComponent />
        <Layout className="body content-layout">
          <Header />
          <Content>
            <Row>
              <Col span={3}></Col>
              <Col className="mt-5" span={15}>
                <Card
                  style={{ backgroundColor: "#555555" }}
                  className="card-flim"
                >
                  <Row className="text-center">
                    <Col span={6}>
                      <img
                        className="poster-flim"
                        src={`http://localhost:8000/storage/images/${filmDetail.image}`}
                      />
                      <h6 style={{ color: "white" }} className="mt-4">
                        {filmDetail.title}
                      </h6>
                      <p style={{ color: "white" }}>
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
                          {filmDetail.duration}
                        </span>
                        <span style={{ marginLeft: "15px" }}>
                          <FontAwesomeIcon
                            style={{ color: "red" }}
                            icon={faFlag}
                          />{" "}
                          FHD
                        </span>
                      </p>
                    </Col>
                    <Col span={2}></Col>
                    <Col className="text-start" span={16}>
                      <p style={{ color: "white" }}>{filmDetail.description}</p>
                      <p>{filmDetail.director}</p>
                      <p>{filmDetail.cast}</p>
                      <p>{filmDetail.country}</p>

                      <Button style={{ marginTop: "150px" }}>
                        <Link to={`/watchflim/${filmDetail.id}`}>Xem phim</Link>
                      </Button>
                      <div className="mt-3"></div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <iframe
                      style={{ margin: "20px" }}
                      width="800"
                      height="400"
                      src={filmDetail.trailer}
                      title="Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Row>
                </Card>
              </Col>

              <Col className="mt-5" span={6}>
                <Card
                  style={{ backgroundColor: "#555555" }}
                  className="card-flim-oder"
                >
                  {filmfull.map((movie) => (
                    <div key={movie.id} className="d-flex align-items-center">
                      <img
                        className="poster-flim-oder"
                        src={`http://localhost:8000/storage/images/${movie.image}`}
                      />
                      <div className="ml-3 mt-4">
                        <h6
                          style={{
                            color: "white",
                            marginLeft: "5px",
                          }}
                        >
                          {movie.title}
                        </h6>
                        <p style={{ color: "white", marginLeft: "5px" }}>
                          {movie.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              </Col>
            </Row>
            <Row style={{ marginLeft: "-100px", marginTop: "150px" }}>
              {filmfull.map((movie, index) => (
                <React.Fragment key={movie.id}>
                  {index % 4 === 0 && <Col span={3}></Col>}
                  <Col key={movie.id} span={4} style={{ marginTop: "15px" }}>
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

export default FilmDetail;
