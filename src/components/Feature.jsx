import React from "react"

function Feature({ icon, title, description }) {
  return (
    <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <div className="icon bg-[#081730] rounded-2xl p-4">
           <img
                src={icon}
                alt="Icon"
                className="w-[3rem]" />
        </div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">{description}</span>

        <span className="text-[#e600ff] underline mt-[2.5rem] hover: cursor-pointer">
            Saiba mais
        </span>
    </div>
  )
}

export default Feature