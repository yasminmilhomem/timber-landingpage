import React from "react"
import CenterMenu from "./CenterMenu"
import { Instagram, Twitter, GitHub, LinkedIn } from "@mui/icons-material"

function Footer() {
  const SocialStyle = "rounded-full border-2 border-white p-2 mr-[5rem] "
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relativo z-[-1]">
        <CenterMenu />

        { /* Social Icons */}
        <div className="flex w-[100%] justify-center mt-14 mb-5">
          <div className={SocialStyle}>
            <a href="https://www.instagram.com/yasminmilhomem/"><Instagram /></a>
          </div>
          <div className={SocialStyle}>
            <a href=""><Twitter /></a>
          </div>
          <div className={SocialStyle}>
            <a href="https://github.com/yasminmilhomem"><GitHub /></a>
          </div>

          <div className={SocialStyle}>
            <a href="https://www.linkedin.com/in/yasminmilhomemdeoliveira/"><LinkedIn /></a>
          </div>
        </div>

        { /* detail */}
        <div className="details">
          <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
          Landing page desenvolvida a partir de <a href="https://youtu.be/2AFZDxg3Aww">tutorial</a>.
          </span>

        </div>
    </div>
  )
}

export default Footer