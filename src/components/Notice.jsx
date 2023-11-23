import { TranslatorContext } from "../screens/context/TranslatorContext";
import {
    NoticeDiv
  } from "../assets/style/homeElements";
import { useContext } from "react";

const Notice = () => {
    
    const { lang } = useContext(TranslatorContext);

    return(
        <NoticeDiv>
            <center>
            <marquee> 
            { lang === "french" ? 
            (<>- Veuillez noter que le nouveau site web est en 
            construction et utilisez ce site pour planifier des appels - </>)
            : (<>- Kindly note that the new website is under construction and 
            use this website for scheduling calls - </>)
            }
            </marquee>
            </center>
        </NoticeDiv>
    );
};

export default Notice;