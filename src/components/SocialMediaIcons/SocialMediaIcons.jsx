import React from "react";
import "./SocialMediaIcons.scss";
import { SocialIcons } from "../../assets/Constants";

const SocialMediaIcons = ({ className }) => {
  return (
    <ul className={`socialIcons ${className}`}>
      {SocialIcons.map((icon, index) => (
        <li
          key={`social-media-icon-${index}`}
          className="socialIcons--item"
          tabIndex="0"
        >
          <a href="#">{icon}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
