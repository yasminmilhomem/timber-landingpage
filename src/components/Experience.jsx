import React from "react"
import Path318 from "../img/path2.png"
import Feature from "./Feature"
import Group2 from "../img/group2.png"
import Music from "../img/music.png"
import Group4 from "../img/group4.png"

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[13.5rem] mt-[5rem] relative z-[2] rounded-b-[5rem]">
        {/* title icon */}
        <img
        src={Path318}
        alt=""
        className="w-[5rem]" />

        {/* heading */}
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>Um aplicativo incrível que pode mudar o seu dia a dia</span>
            <span><b>Experimente já!</b></span>
        </div>
        {/* features */}
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon={Group2} title="Para músicas ao vivo" description="Texto 1" />
            <Feature icon={Music} title="Para músicas diárias" description="Texto 2" />
            <Feature icon={Group4} title="Para artistas" description="Texto 3" />
        </div>
    </div>
  )
}

export default Experience