import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";
import { AudioIcons } from "../../assets/Constants";
import { useStateContext } from "../ContextAPI/StateContext";

let lastPlayedAudio;
let allAudioElements = [];
let allAudioElementsNames = [];

const AudioItem = ({ audio, audioId, index, isPlaying, setIsPlaying }) => {
  const [isClickedAgain, setIsClickedAgain] = useState(false);
  const [duration, setDuration] = useState("");
  const [currentTime, setCurrentTime] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getAudio = useRef(null);

  const { play, pause, share } = AudioIcons;

  const {
    setAudioPlaying,
    setHeroPlaying,
    setIsLoadingHero,
    HandleShare,
    setDefaultShareLinkForHero,
    setAudioName,
  } = useStateContext();

  let currentAudio;
  setTimeout(() => {
    getAudio && (currentAudio = getAudio?.current);
  }, 0);

  const HandlePlayPause = () => {
    setDefaultShareLinkForHero(audioId);
    setAudioName(audio.slice(0, audio.lastIndexOf(".")));
    if (!isLoading) {
      setIsLoadingHero(true);
      setAudioPlaying(currentAudio);

      lastPlayedAudio.pause();
      lastPlayedAudio.currentTime = 0;
      lastPlayedAudio = currentAudio;
      setIsClickedAgain((prev) => !prev);
      setIsPlaying(index);

      isPlaying && isClickedAgain
        ? currentAudio?.pause()
        : lastPlayedAudio?.paused &&
          currentAudio
            ?.play()
            .then(() => {
              setIsLoading(false);
              setIsLoadingHero(false);
            })
            .catch(() => {
              setIsLoading(false);
              setIsLoadingHero(false);
            });

      setHeroPlaying(!currentAudio?.paused);
    }
  };

  const ConvertingTimeToCorrectFormat = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes?.toString().padStart(2, "0")}:${seconds
      ?.toString()
      .padStart(2, "0")}`;
  };

  function HandleLoadedMetadata() {
    setDuration(ConvertingTimeToCorrectFormat(currentAudio?.duration));
  }

  useEffect(() => {
    !allAudioElements.includes(getAudio?.current) &&
      allAudioElements.push(getAudio?.current);

    !allAudioElementsNames.includes(audio) &&
      allAudioElementsNames.push(audio.slice(0, audio.lastIndexOf(".")));
    setAudioPlaying(allAudioElements[0]);
    setAudioName(allAudioElementsNames[0]);
    lastPlayedAudio = allAudioElements[0];
  }, []);

  useEffect(() => {
    currentAudio?.addEventListener("loadstart", () => setIsLoading(true));
    currentAudio?.addEventListener("canplay", () => setIsLoading(false));
  }, [currentAudio]);

  useEffect(() => {
    if (currentAudio) {
      currentAudio?.addEventListener("loadedmetadata", HandleLoadedMetadata);
      return () =>
        currentAudio?.removeEventListener(
          "loadedmetadata",
          HandleLoadedMetadata
        );
    }
  }, [currentAudio?.loadedmetadata, currentAudio?.readyState]);

  useEffect(() => {
    const HandleAudioEnded = () => {
      setIsPlaying(false);
      setHeroPlaying(false);
      currentAudio.currentTime = 0;
    };
    currentAudio?.addEventListener("ended", HandleAudioEnded);
    return () => currentAudio?.removeEventListener("ended", HandleAudioEnded);
  }, [getAudio]);

  useEffect(() => {
    const GetCurrentTime = () => {
      setCurrentTime(
        ConvertingTimeToCorrectFormat(
          currentAudio?.duration - currentAudio?.currentTime
        )
      );
    };
    currentAudio?.addEventListener("timeupdate", GetCurrentTime);
    return () =>
      currentAudio?.removeEventListener("timeupdate", GetCurrentTime);
  }, [getAudio]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash === audioId) {
      let elementToScroll = document.querySelector("#" + audioId);
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [audioId]);

  const whileInView = { x: 0, transition: { duration: 0.3 } };
  const leftVariants = { initial: { x: -20 }, whileInView };
  const rightVariants = { initial: { x: 30 }, whileInView };
  return (
    <div className="audios__items--item" id={audioId}>
      <audio ref={getAudio} src={`./audios/${audio}`} preload="metadata" />

      <motion.p
        className="audio--item--index"
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {index + 1}
      </motion.p>
      <motion.button
        type="button"
        className="audio--item--playPauseBtn"
        onClick={HandlePlayPause}
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {isLoading ? (
          <DotLoader speedMultiplier={2} size={15} color="#ded5c6" />
        ) : !getAudio?.current?.paused ? (
          pause
        ) : (
          play
        )}
      </motion.button>
      <motion.p
        className="audio--item--name"
        variants={leftVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {getAudio?.current?.paused ? (
          audio.length > 80 ? (
            `${audio.slice(0, 50).split(".mp3").join("")}.....`
          ) : (
            audio.split(".mp3")
          )
        ) : (
          <marquee behavior="scroll" direction="left">
            {audio.split(".mp3")}
          </marquee>
        )}
      </motion.p>
      <motion.p
        className="audio--item--duration"
        variants={rightVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {!currentTime ? duration || "00:00" : currentTime}
      </motion.p>
      <motion.button
        type="button"
        className="audio--item--shareBtn"
        variants={rightVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        onClick={() => HandleShare(`#${audioId}`)}
      >
        {share}
      </motion.button>
    </div>
  );
};

export default AudioItem;
