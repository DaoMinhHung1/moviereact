import axios from "axios";
import React, { useState } from "react";

const Text = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image, image.name);
    formData.append("year", year);
    formData.append("director", director);
    formData.append("cast", cast);
    formData.append("country", country);
    formData.append("duration", duration);
    formData.append("rating", rating);
    formData.append("cast", cast);
    formData.append("status", status);
    formData.append("language", language);
    formData.append("trailer", trailer);
    formData.append("video", video);
    formData.append("genres_id", genres_id);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/flims",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Film added:", res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Film</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <label>Derector:</label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div>
          <label>Cast:</label>
          <input
            type="text"
            name="cast"
            value={cast}
            onChange={(e) => setCast(e.target.value)}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setContry(e.target.value)}
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div>
          <label>Trailer URL:</label>
          <input
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
            type="text"
            name="genres_id"
            value={genres_id}
            onChange={(e) => setGenres_id(e.target.value)}
          />
        </div>
        <button type="submit">Add Film</button>
      </form>
    </div>
  );
};

export default Text;
