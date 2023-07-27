import { createContext, useContext, useState } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [isLoadingHero, setIsLoadingHero] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState();
  const [heroPlaying, setHeroPlaying] = useState(false);
  const [defaultShareLinkForHero, setDefaultShareLinkForHero] =
    useState("track-1");
  const [audioName, setAudioName] = useState();

  const HandleShare = async (url) => {
    try {
      await navigator.share({ url });
    } catch (error) {
      console.error("Error sharing content: ", error);
    }
  };

  return (
    <context.Provider
      value={{
        audioPlaying,
        setAudioPlaying,
        heroPlaying,
        setHeroPlaying,
        isLoadingHero,
        setIsLoadingHero,
        HandleShare,
        defaultShareLinkForHero,
        setDefaultShareLinkForHero,
        audioName,
        setAudioName,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useStateContext = () => useContext(context);
