import React from "react"
import CenterMenu from "./CenterMenu"
import MuzikLogo from "../img/logo.png"

function Header() {
  const buttonStyle = "border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]"
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem] ">
      {/* logo */}
        <img
          src={MuzikLogo}
          alt="MuzikLogo"
          className="logo w-[42px] h-[42px]" />
          <p className="ml-[-10rem] text-[2rem] font-[555] text-transparent bg-clip-text bg-gradient-to-bl from-[#f3071d] to-[#e600ff]">tiMber</p>
        {/* side menu */}
        <CenterMenu />
        {/* buttons */}
        <div className="buttons flex">
            <button className={buttonStyle + `bg-[#232a4e] mr-[30px]`}>Log in</button>
            <button className={`hover: bg-[#232a4e] ` + buttonStyle}>Sign up</button>
        </div>
    </div>
  )
}

export default Header