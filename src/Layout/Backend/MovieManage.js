import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Layout,
  Menu,
  Modal,
  Row,
  Select,
  Table,
  Tooltip,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "../../LayoutCss/admin.css";
import axios from "axios";
import Modalcp from "../../Component/Modalcp";
import { Link } from "react-router-dom";

const MovieManage = () => {
  const [filmfull, setFilmfull] = useState([]);
  const [genres, setGenres] = useState([]);
  const [editingFilm, setEditingFilm] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isOtherModalVisible, setIsOtherModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [country, setContry] = useState("");
  const [duration, setDuration] = useState();
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [language, setLanguage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [video, setVideo] = useState("");
  const [genres_id, setGenres_id] = useState("");

  useEffect(() => {
    // Gọi API để lấy danh sách phim phổ biến
    axios
      .get("http://localhost:8000/api/genres")
      .then((response) => {
        const data = response.data;
        setGenres(data); // Cập nhật state với dữ liệu từ API
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const handleEdit = async (filmId) => {
    const filmToEdit = filmfull.find((film) => film.id === filmId);
    if (filmToEdit) {
      setEditingFilm(filmToEdit);
      setIsEditModalVisible(true);

      setTitle(filmToEdit.title);
      setDescription(filmToEdit.description);
      setYear(filmToEdit.year);
      setDirector(filmToEdit.director);
      setCast(filmToEdit.cast);
      setContry(filmToEdit.country);
      setDuration(filmToEdit.duration);
      setRating(filmToEdit.rating);
      setStatus(filmToEdit.status);
      setLanguage(filmToEdit.language);
      setTrailer(filmToEdit.trailer);
      setVideo(filmToEdit.video);
      setGenres_id(filmToEdit.genres_id);
    }
  };

  const handleEditSave = async () => {
    try {
      const updatedFilmData = new FormData();
      updatedFilmData.append("title", title);
      updatedFilmData.append("description", description);
      updatedFilmData.append("year", year);
      updatedFilmData.append("director", director);
      updatedFilmData.append("cast", cast);
      updatedFilmData.append("country", country);
      updatedFilmData.append("duration", duration);
      updatedFilmData.append("rating", rating);
      updatedFilmData.append("status", status);
      updatedFilmData.append("language", language);
      updatedFilmData.append("trailer", trailer);
      updatedFilmData.append("video", video);
      updatedFilmData.append("genres_id", genres_id);

      if (image) {
        updatedFilmData.append("image", image);
      }

      const res = await axios.post(
        `http://localhost:8000/api/flimupdate/${editingFilm.id}`,
        updatedFilmData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Film edited:", res.data);
      setIsEditModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (filmId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/flimdelete/${filmId}`
      );
      console.log("Film deleted:", res.data);
      window.location.reload(); // Tải lại trang sau khi xóa
    } catch (error) {
      console.error(error);
    }
    console.log(filmId);
  };

  const columns = [
    {
      title: "Tên Phim",
      dataIndex: "title",
      key: "title",
      width: 150,
    },
    {
      title: "Ảnh film",
      dataIndex: "image",
      key: "image",
      width: 120,
      render: (image) => (
        <img
          src={`http://localhost:8000/storage/images/${image}`}
          alt="Ảnh film"
          style={{ width: "70px", height: "70px" }}
        />
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "director",
      key: "director",
      width: 100,
    },
    {
      title: "Diễn viên",
      dataIndex: "cast",
      key: "cast",
      width: 100,
    },
    {
      title: "Thời lượng",
      dataIndex: "duration",
      key: "duration",
      width: 100,
    },
    {
      title: "Thể loại",
      dataIndex: "genres_id",
      key: "genres_id",
      width: 100,
      render: (genres_id) => {
        // Tìm tên thể loại dựa trên genres_id
        const genre = genres.find((genre) => genre.id === genres_id);

        // Nếu không tìm thấy thể loại, trả về một giá trị mặc định
        return genre ? genre.name : "Không xác định";
      },
    },
    {
      title: "Năm",
      dataIndex: "year",
      key: "year",
      width: 100,
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "",
      key: "",
      width: 100,
      render: (text, record) => (
        <>
          <Button type="primary" onClick={() => handleEdit(record.id)}>
            Chỉnh sửa
          </Button>
        </>
      ),
    },
    {
      title: "Xóa",
      dataIndex: "",
      key: "",
      width: 100,
      render: (text, record) => (
        <Button
          style={{ background: "red" }}
          onClick={() => handleDelete(record.id)}
        >
          Xóa
        </Button>
      ),
    },
  ];
  const openEditModal = () => {
    setIsEditModalVisible(true);
    setIsOtherModalVisible(false);
  };

  const openOtherModal = () => {
    setIsOtherModalVisible(true);
    setIsEditModalVisible(false);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider className="menubar" width={200}>
          <Menu theme="" className="itembar">
            <img className="alta" src="/asset/img/logoalta.png" alt="" />
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/moviemanager";
              }}
            >
              Danh sách phim
            </Menu.Item>
            <Menu.Item style={{ marginTop: "657px" }} className="menu-item">
              <Link to={"/home"}>Quay lại</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="account bgheader">
            <Col style={{ marginLeft: "-17px" }} span={15}>
              <h3 className="chuotren">Danh sách phim</h3>
            </Col>
          </Header>
          <Layout style={{ marginTop: "-5px" }} className="center-content">
            <Content>
              <Row className="mt-5">
                <Modalcp />
                <Col span={24}>
                  <Table
                    rowClassName={(record, index) =>
                      index % 2 === 0 ? "table-row-even" : "table-row-odd"
                    }
                    columns={columns}
                    className="custom-table"
                    dataSource={filmfull}
                    pagination={{
                      pageSize: 3,
                      pageSizeOptions: ["3", "6", "9"],
                    }}
                  />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Modal
        footer={null}
        title="Chỉnh sửa phim"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
      >
        <form onSubmit={handleEditSave}>
          <div>
            <label className="form-label">Title:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              className="form-control"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              className="form-control-file"
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              className="form-control"
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div>
            <label>Derector:</label>
            <input
              className="form-control"
              type="text"
              name="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div>
            <label>Cast:</label>
            <input
              className="form-control"
              type="text"
              name="cast"
              value={cast}
              onChange={(e) => setCast(e.target.value)}
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              className="form-control"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setContry(e.target.value)}
            />
          </div>
          <div>
            <label>Duration:</label>
            <input
              className="form-control"
              type="text"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              className="form-control"
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              className="form-control"
              type="text"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label>Language:</label>
            <input
              className="form-control"
              type="text"
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div>
            <label>Trailer URL:</label>
            <input
              className="form-control"
              type="text"
              name="trailer"
              value={trailer}
              onChange={(e) => setTrailer(e.target.value)}
            />
            {trailer && (
              <iframe
                width="560"
                height="315"
                src={trailer}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div>
            <label>Video URL:</label>
            <input
              className="form-control"
              type="text"
              name="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
            {trailer && (
              <p>
                <iframe
                  width="560"
                  height="315"
                  src={video}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            )}
          </div>
          <div>
            <label>Genres_id:</label>
            <input
              className="form-control"
              type="text"
              name="genres_id"
              value={genres_id}
              onChange={(e) => setGenres_id(e.target.value)}
            />
          </div>
          <button className="btn btn-success mt-2 text-center" type="submit">
            Chỉnh sửa
          </button>
        </form>
      </Modal>
    </>
  );
};

export default MovieManage;
