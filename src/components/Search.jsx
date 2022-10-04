import React from "react"
import Backgraphics from "../img/backgraphics.png"
import Search1 from "../img/search1.png"
import Search2 from "../img/search2.png"
import Search3 from "../img/search3.png"
import Search4 from "../img/search4.png"
import SearchIcon from "../img/search.png"
import Path2 from "../img/path2.png"
import MusicPlayer from "./MusicPlayer"

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      { /* left side */}
      <div className="left flex-1">
        <img
          src={Backgraphics}
          alt=""
          className="absolute top-[22rem] left-[-47rem]" />
        <img
          src={Search1}
          alt=""
          className="w-[16rem] top-[26rem] absolute" />
        <img
          src={Search2}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]" />
        <img
          src={Search3}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute" />
        <img
          src={Search4}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute" />
      </div>

      { /* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
          { /* Search */}
          <div className="searchbar flex justify-start w-[100%] ">
            <input
              type="text"
              placeholder="Insira a URL desejada"
              className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem] " />
              {/* SearchIcon */}
            <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]">
              <img
              src={SearchIcon}
              alt="Search icon"
              className="w-[1.5rem] "/>
            </div>
          </div>
          {/* tild icon */}
          <div className="tild flex justify-start mt-7 items-center w-[100%]">
            <img
            src={Path2}
            alt="" 
            className="w-[5rem]" />
          </div>

          {/* paragraph */}
          <div className="detail flex flex-col mt-5 text-4xl">
            <span>Busque sua música</span>
            <span><b>inserindo sua URL.</b></span>
            <span className="text-sm mt-3 text-[#4d586a]">
              Digite na barra de pesquisa a URL da música<br />
              que deseja ouvir.  <br />
            </span>
            <div>
              {/* Music Plauer */}
              <MusicPlayer />
            </div>

          </div>
        
      </div>
    </div>
  )
}

export default Search