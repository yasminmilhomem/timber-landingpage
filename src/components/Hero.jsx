import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import Backgraphics from "../img/backgraphics.png"
import P1 from "../img/cellphone-icon.png"
import P2 from "../img/p 2.png"
import P3 from "../img/p 3.png"
import P4 from "../img/p 4.png"
import ReactVisibilitySensor from "react-visibility-sensor"; 

function Hero() {
    const [elementIsVisible, setElementIsVisible] = useState(false)
    return(
        <VisibilitySensor>
            <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
                {/* left side */}
                <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
                    <span>
                        A música
                    </span>
                    <span className="font-extrabold">
                    muda o mundo!
                    </span>
                    <span className="text-[15px] text-[#525d6e]">
                        Experimente música da melhor qualidade!
                        <br />
                        Ouça seus artistas favoritos e construa experiências.
                    </span>
                    {/* download ads */}
                    <div>
                        <span className="text-[13px]">
                            Baixe agora no Android ou iOS
                            <DownloadAds />
                        </span>
                    </div>
                </div>
                {/* right side */}
                <div className="images relative w-[50%]">
                    <img
                        src={Backgraphics}
                        alt="Backgraphics" 
                        className="absolute top-[8rem] left-[19rem]"/>
                    <img
                        src={P1}
                        alt="P1"
                        className="absolute top-[-15rem] h-[34rem] left-[13rem]" />
                    <img
                        src={P2}
                        alt="P2"
                        className="absolute left-[235px] top-[94px] w-[175px]" />
            <img
                        src={P3}
                        alt="P3"
                        className="absolute w-[5rem] left-[13rem] top-[12rem] " />
                    <img
                        src={P4}
                        alt="P4"
                        className="absolute w-[5rem] left-[12.5rem] top-[12rem]" />
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default Hero