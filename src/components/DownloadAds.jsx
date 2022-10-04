import React from 'react'
import AppStore from '../img/appstore.png'
import GooglePlay from "../img/googleplay.png";

function DownloadAds() {
    const downloadImgStyle = 'border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
        <div className="download-images flex">
            <img
              src={GooglePlay}
              alt="GooglePlay icon"
              className={downloadImgStyle + ` mr-[2rem]`}  
            / >
            <img
              src={AppStore}
              alt="AppStore icon"
              className={downloadImgStyle}
            / >
        </div>
    </div>

  )
}

export default DownloadAds