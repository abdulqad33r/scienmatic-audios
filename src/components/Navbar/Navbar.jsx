import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import { SideMenu, Arrows } from "../../assets/Constants"
import { SocialMediaIcons } from "../Container"
import { AnimatePresence, motion } from "framer-motion"
import { DotLoader } from "react-spinners"

const asideVariants = {
  initial: {
    x: "100%",
    scale: 0,
  },
  animate: {
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut", type: "spring" },
  },
  exit: { x: "-50%", scale: 0 },
}

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "8px"
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0"
    }
  }, [sidebar])

  return (
    <header className="navbar">
      <nav className="flex">
        <a href="/" className="nav__logo" style={{ pointerEvents: "initial" }}>
          <img
            src={import.meta.env.BASE_URL + "./images/monstercat-logo.webp"}
            alt="monstercat-logo"
          />
        </a>

        <SocialMediaIcons className="nav__mediaIconsList" />

        <button
          type="button"
          className={`flex nav__hamburger ${sidebar && "nav__cross"}`}
          onClick={() => setSidebar((prev) => !prev)}>
          <div className="nav__hamburger--line nav__cross--line1"></div>
          <div className="nav__hamburger--line nav__cross--line2"></div>
          <div className="nav__hamburger--line nav__cross--line3"></div>
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {sidebar && (
          <motion.aside
            className="sidebar"
            variants={asideVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            <div style={{ marginLeft: "100px", marginTop: "10px" }}></div>
            <a href="/" className="nav__logo">
              {!imageLoaded && (
                <span style={{ display: "block", marginLeft: "100px" }}>
                  <DotLoader speedMultiplier={2} size={24} color="#ded5c6" />
                </span>
              )}
              <img
                src="https://cdn.monstercat.com/monstercat-logo-white.svg"
                alt="monstercat"
                onLoad={() => setImageLoaded(true)}
                style={{
                  width: "180px",
                  height: `${imageLoaded ? "40.77px" : "0"}`,
                }}
              />
            </a>

            <div className="sidebar__menu">
              <ul className="sidebar__menu--items">
                {SideMenu.map((item, index) => (
                  <SidebarItem
                    item={item}
                    index={index}
                    key={`sidebarItem-${item.title}-${index}`}
                  />
                ))}
              </ul>
            </div>

            <SocialMediaIcons className="flex wrap" />

            <div className="signButtons">
              <a
                role="button"
                href="#"
                className="sidebar__signBtn sidebar__signInBtn">
                SIGN IN
              </a>
              OR
              <a
                role="button"
                href="#"
                className="sidebar__signBtn sidebar__signUpBtn">
                SIGN UP
              </a>
            </div>
            {/* After installing react-router-dom these both links will change into Link element */}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
const subMenuItemsContainer = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const subMenuItem = {
  hidden: { x: "10%", scale: 0 },
  show: { x: 0, scale: 1 },
}
const SidebarItem = ({ item }) => {
  const [subMenu, setSubmenu] = useState(false)
  return (
    <li>
      <button
        className="flex sidebar__menu--items--item"
        onClick={() => setSubmenu((prev) => !prev)}>
        {item.title.toUpperCase()}{" "}
        {item.submenu && (subMenu ? Arrows.up : Arrows.down)}
      </button>
      {item.submenu && subMenu && (
        <motion.ul
          className="sidebar__menu--subItems"
          variants={subMenuItemsContainer}
          initial="hidden"
          animate="show">
          {item.submenu.map((subItem, subIndex) => (
            <motion.li
              variants={subMenuItem}
              className="sidebar__menu--subItems--item"
              key={`sidebarSubItem-${subItem}-${subIndex}`}>
              {subItem.toUpperCase()}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </li>
  )
}

export default Navbar
