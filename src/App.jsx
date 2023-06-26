import React from "react";
import Models from "./components/Models";
import model from "./components/model"
import Navbar from "./components/Navbar";



function App() {

  const[showMenu, setShowMenu] = React.useState(false);
  
  
  function toggleMenu() {
    setShowMenu(prevState=>!prevState);
    console.log(showMenu);  
    
    
  }
  const pageElements = model.map(model => (
    <Models
    key={model.id}
    id={model.id}
    item={model.item}
    backgroundUrlLg={model.backgroundUrlLg}
    backgroundUrlSm={model.backgroundUrlSm}
    cta={model.cta}
    darkButton={model.darkButton}
    lightButton={model.lightButton}
    toggleMenu={toggleMenu}
    showMenu={showMenu}


  />
))
  // function createModel(model){
  //   return(
  //   <Models
  //     key={model.id}
  //     id={model.id}
  //     item={model.item}
  //     backgroundUrlLg={model.backgroundUrlLg}
  //     backgroundUrlSm={model.backgroundUrlSm}
  //     cta={model.cta}
  //     darkButton={model.darkButton}
  //     lightButton={model.lightButton}
  //     toggleMenu={toggleMenu}


  //   />
  //   );
  // }

  return (    
    // <div className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD')] h-screen bg-cover bg-center">
    <div >
      <Navbar
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        
      />
      
      <div className="scroll-container">{pageElements}</div>
      
                              
    </div>
      
    
  )
}

export default App
