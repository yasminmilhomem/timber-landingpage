import { React, useState } from "react"
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Feature({ icon, title, description }) {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const variant = {
    true : {
      transform : "scale(1)",
    },

    false : {
      transform : "scale(0.5)",
    }
  };

  return (
    <ReactVisibilitySensor
    onChange={(isVisible) => setElementIsVisible(isVisible)}
    //minTopValue={100}
    >
    <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            durantion: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4">

           <img
                src={icon}
                alt="Icon"
                className="w-[3rem]" />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">{description}</span>

        <span className="text-[#e600ff] underline mt-[2.5rem] hover: cursor-pointer">
            Saiba mais
        </span>
    </div>
    </ReactVisibilitySensor>
  );
}

export default Feature