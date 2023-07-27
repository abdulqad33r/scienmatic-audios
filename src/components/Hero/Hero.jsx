import React, { useEffect } from "react"
import "./Hero.scss"
import { AudioIcons } from "../../assets/Constants"
import { useStateContext } from "../ContextAPI/StateContext"
import { DotLoader } from "react-spinners"

const Hero = () => {
  const {
    audioPlaying,
    heroPlaying,
    setHeroPlaying,
    isLoadingHero,
    setIsLoadingHero,
    HandleShare,
    defaultShareLinkForHero,
    audioName,
  } = useStateContext()

  const HandleListen = () => {
    setIsLoadingHero(true)
    !audioPlaying?.paused
      ? audioPlaying?.pause()
      : audioPlaying
          ?.play()
          .then(() => setIsLoadingHero(false))
          .catch(() => setIsLoadingHero(false))
    setHeroPlaying(!audioPlaying?.paused)
    setIsLoadingHero(false)
  }

  useEffect(() => {
    audioPlaying?.addEventListener("loadstart", () => setIsLoadingHero(true))
    audioPlaying?.addEventListener("canplay", () => setIsLoadingHero(false))
  }, [audioPlaying])

  return (
    <section className="hero">
      <div className="hero__background-image"></div>

      <div className="container flex hero__container">
        <div className="hero__left flex">
          <div className="hero__left--text">
            <p>
              <span>Instinct</span> — Released May 22, 2020
            </p>
          </div>
          <div className="hero__left--img">
            <img
              src={import.meta.env.BASE_URL + "/images/cover.jpg"}
              alt="cover-image"
            />
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right--text">
            <h1>
              {audioName?.split(" ").length > 5
                ? `${audioName?.split(" ").slice(0, 5).join(" ")}.....`
                : audioName}
            </h1>
          </div>

          <div className="hero__right__buttons">
            <button
              type="button"
              className={`hero__right__buttons--listenNow ${
                heroPlaying ? "hero__right__buttons--listenNow--shake" : ""
              }`}
              onClick={HandleListen}>
              <span>
                {isLoadingHero ? (
                  <DotLoader speedMultiplier={2} size={15} color="#ded5c6" />
                ) : heroPlaying ? (
                  AudioIcons.pause
                ) : (
                  AudioIcons.play
                )}
              </span>
              <span className="btn-spanToAnimate"></span>
              LISTEN NOW
            </button>
            <button
              type="button"
              className="hero__right__buttons--share"
              onClick={() => HandleShare(`#${defaultShareLinkForHero}`)}>
              <span>{AudioIcons.share}</span>SHARE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
