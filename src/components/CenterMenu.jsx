import React from "react"

function CenterMenu() {
  const liStyle = "mr-[3rem] hover: cursor-pointer text-[0.8rem]"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between '>
            <li className={liStyle}>Início</li>
            <li className={liStyle}>Sobre</li>
            <li className={liStyle}>Player</li>
            <li className={liStyle}>Download</li>
        </ul>
    </div>
  )
}

export default CenterMenu