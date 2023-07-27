import React, { useState } from "react";
import "./Audios.scss";
import { AudiosFiles } from "../../assets/Constants";
import { AudioItem } from "../Container";

const Audios = () => {
  const [isPlaying, setIsPlaying] = useState();
  const [myAudios] = useState(AudiosFiles);

  return (
    <section className="audios">
      <div className="container audios__items">
        <h1 className="audios__heading">TRACK LIST</h1>
        {myAudios.map((audio, index) => (
          <AudioItem
            audio={audio}
            index={index}
            isPlaying={isPlaying === index}
            setIsPlaying={setIsPlaying}
            key={`${index}-${audio}`}
            audioId={`track-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Audios;
