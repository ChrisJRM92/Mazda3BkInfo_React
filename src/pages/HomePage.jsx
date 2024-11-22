import { IoIosArrowBack } from "react-icons/io";
import { RiPrinterFill } from "react-icons/ri";

// Componentes
import Buttom from "../components/Buttom";
import Profile from "../components/Profile";
import SearchEngine from "../components/SearchEngine";
import "./styles/HomePage.css";
import GenInf from "../components/structure/GenInf";
import Engine from "../components/structure/Engine";
import Susp from "../components/structure/Susp";
import TransSist from "../components/structure/TransSist";
import Brakes from "../components/structure/Brakes";
import DiferChange from "../components/structure/DiferChange";
import Direction from "../components/structure/Direction";
import Air from "../components/structure/Air";
import RetDisp from "../components/structure/RetDisp";
import BodyWork from "../components/structure/BodyWork";
import VideoInfo from "../components/structure/VideoInfo";
import { CNavItem } from "@coreui/react";
import { CNavTitle } from "@coreui/react";
import { CSidebarNav } from "@coreui/react";
import { CNavGroup} from "@coreui/react";

import GenInfTest from "../components/structure/GenInfTest";
import Test1 from "../components/structure/test";
import UserManual from "../components/structure/UserManual";
import Mant from "../components/structure/Mant";

const HomePage = () => {
  const labelsButtoms = ["Advertencia", "imprimir", "VIN", "Códigos DTC"];
  const url = [
    "/content/esicont/es/engine/A01/html/B3E000000001201.html",
    "/content/esicont/html/vin.html",
  ];
  const iconsComponents = ["<IoInformationCircleSharp />"];

  const sections = [
    "section1", 
    "section2", 
    "section3", 
    "section4", 
    "section5", 
    "section6", 
    "section7", 
    "section8", 
    "section9",
    
  ]

  return (
    <>
      <div className="container_home">
        <div className="container_lateral_menu">
          {/* Header icons */}
          <a href="/content/DefaultPage.html" target="contentIframe">
            <div className="container_icon_header">
              <div className="icon_header_grid">
                <div className="iconsBack"></div>
                <div className="iconFront"></div>
                <div className="iconLateral"></div>
              </div>
            </div>
          </a>
          <hr className="rule" />
          {/* Arrow buttom */}
          <div className="arrowButtom" htmlFor="chk">
            <input className="inputCheck" type="checkbox" id="chk" />
            <label className="arrowLabel" htmlFor="chk">
              <IoIosArrowBack />
            </label>
          </div>

          {/* Icons content */}
          <div className="container_content">
            {/* <Test1 idFix={sections[0]}/> */}
            <GenInf idFix={sections[0]}/>
            <Engine idFix={sections[1]}/>
            <Susp idFix={sections[2]}/>
            <TransSist idFix={sections[3]}/>
            <Brakes idFix={sections[4]}/>
            <DiferChange idFix={sections[5]}/>
            <Direction idFix={sections[6]}/>
            <Air idFix={sections[7]}/>
            <RetDisp idFix={sections[8]}/>
            <BodyWork idFix={sections[9]}/>
            <hr className="rule"  />
            <UserManual />
            <VideoInfo />
            <Mant/>
          </div>
        </div>

        <div className="container_header">
          <div className="searchBox">
            <SearchEngine />
            {/* <Buttom label = {labelsButtoms[3]}/> */}
          </div>
          <div className="contentOptions">
            <Buttom label={labelsButtoms[0]} url={url[0]} />
            <Buttom icon={RiPrinterFill} printData={true} />
            <Buttom label={labelsButtoms[2]} url={url[1]} />
            <Profile />
          </div>
        </div>
        <div className="container_body">
          <iframe
            className="iframeContent"
            id="print"
            name="contentIframe"
            src="/content/DefaultPage.html"
            frameBorder={0}
          ></iframe>
        </div>
        <div className="container_footer">
          <p className="label_footer">Versión V1.8.7</p>
          {/* <p className='label_footer'>2003 - 2008</p> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
