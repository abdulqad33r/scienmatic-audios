import React from "react";
import "./footer.scss";
import { SocialMediaIcons } from "../Container";
import { Arrows } from "../../assets/Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__emailSection flex wrap">
          <FooterElements
            elements={[
              "about monstercat",
              "contact us",
              "careers",
              "news",
              "press",
            ]}
          />
          <FooterElements elements={["terms of policy", "privacy policy"]} />
          <div className="emailSection--column emailSection--emailColumn">
            <p className="emailSection--column--item">MONSTERCAT NEWS</p>
            <p className="italic">
              Don't miss a thing, stay up to date with the latest news from us.
            </p>
            <div className="emailSection--emailColumn--emailInput">
              <input type="email" placeholder="Enter email" />
              <button type="button" className="emailSection--emailColumn--arrow">{Arrows.right}</button>
            </div>
          </div>
        </div>
        <div className="footer__copyrightSection flex wrap">
          <p>2011 - 2023 © Monstercat, All Rights Reserved</p>
          <SocialMediaIcons className="flex" />
        </div>
      </div>
    </footer>
  );
};

const FooterElements = ({ elements }) => (
  <ul className="emailSection--column">
    {elements.map((item, index) => (
      <li key={`${index}-${item}`} className="emailSection--column--item">
        <a href="#">{item.toUpperCase()}</a>
      </li>
    ))}
  </ul>
);

export default Footer;
