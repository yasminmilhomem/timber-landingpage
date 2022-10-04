import React from 'react'
import Path2 from "../img/path2.png"
import DownloadAds from "./DownloadAds"

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
        {/* tild icon or path icon */}
        <img
            src={Path2}
            alt="Path2 Icon"
            className="w-[5rem]" />
            {/* heading*/ }
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Baixe a melhor música!</span>
                <span><b>Tenha já o aplicativo.</b></span>
                <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
                    A empresa tiMBer [...] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi, saepe dolor quis cum accusamus. Reprehenderit pariatur dignissimos saepe dolore aut dolorem, doloremque veniam sequi libero veritatis voluptatibus sit itaque.
                </span>
            </div>
            {/* download ads */}
            <div className="mt-14">
                <DownloadAds />
            </div>

    </div>

  )
}

export default Download