import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <div className="container">
      <h1 className="videos__heading">MUSIC VIDEO</h1>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
