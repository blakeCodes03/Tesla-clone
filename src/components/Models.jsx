import React, { useRef, createContext, useCallback, useContext } from "react";
// import Navbar from "./Navbar";
import useIntersection from "./useIntersection";
import { FiChevronDown } from "react-icons/fi";
// import { TfiClose } from "react-icons/tfi";

// const MyContext = React.createContext();

// Navbar section begins

function Models(props) {
  // const[showMenu, setShowMenu] = React.useState(false);

  // function toggleMenu() {
  //   setShowMenu(prevState=>!prevState);
  //   console.log(showMenu);

  // }

  let backgroundUrl;
  switch (props.id) {
    case 1:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_4096,w_1927,c_fit,f_auto,q_auto:best/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center z-10";

      break;
    case 2:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-ModelY-LHD-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop')] h-screen bg-cover bg-center";

      break;

    case 3:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1624,w_750,c_fit,f_auto,q_auto:best/Model-S-homepage-mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop')] h-screen bg-cover bg-center";

      break;
    case 4:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1700,w_800,c_fit,f_auto,q_auto:best/Homepage-Model-X-Mobile-LHD_001')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD')] h-screen bg-cover bg-center";

      break;
    case 5:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1576,w_600,c_fit,f_auto,q_auto:best/Homepage-SolarPanels-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D')] h-screen bg-cover bg-center";

      break;
    case 6:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global')] h-screen bg-cover bg-center";

      break;
    case 7:
      backgroundUrl =
        "bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-Accessories-Mobile')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories')]  h-screen bg-cover bg-center";

      break;
  }
  const addBlur = props.showMenu ? " blur-sm" : " ";

  /* this block implements useIntersection with useRef()
  to add and remove <Navbar/> as <Models/> elements enter and leave viewport*/
  // const ref = useRef();

  // const inViewport = useIntersection(ref, "200px"); // Trigger as soon as the element becomes visible

  return (
    <div
      
      className={backgroundUrl + addBlur + " relative" + "  models"}
    >
      
        
          {/* {
          props.showMenu && <div className={`bg-white absolute right-0 top-0 w-80 no-blur z-50  overflow-y-auto menu-div ${props.toggleMenu ? " " : " "}`}>
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose 
            onClick={()=>props.toggleMenu(props.id)}           
              className="rounded p-1 hover:bg-black/5"
              size={28}
            />
          </div>
          <ul className="pt-8 px-6">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/new/m3">
                Existing Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/tradein">Trade-In</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/drive">Test Drive</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/insurance">Insurance</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/powerwall">Powerwall</a>
            </li>
          </ul>
        </div>
        } */}
        {/* </div> */}
    

      <div className="absolute inset-x-0 mt-[50px] lg:mt-[80px] text-center ">
        <h1 className="text-4xl font-bold">{props.item}</h1>
        <p className="text-sm underline underline-offset-4 hover:cursor-pointer hover:underline-offset-5 hover:decoration-2 hover:decoration-gray-800">
          <a href="">{props.cta}</a>
        </p>
      </div>
      <div className="absolute flex flex-col items-center justify-center text-sm lg:flex-row inset-x-0 bottom-[10%]">
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white opacity-100 font-semibold">
            {props.darkButton}
          </button>
        </a>
        {/* to display the lightButton only if there is a value for it */}
        {props.lightButton && (
          <a href="https://www.tesla.com/model3/design">
            <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2 opacity-60 font-semibold">
              {props.lightButton}
            </button>
          </a>
        )}
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] ">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
}

export default Models;
