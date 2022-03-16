import React,{useState} from 'react';
import './Navbar.scss';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import Hamburger from '../Hamburger/Hamburger';
import Media from 'react-media';
export default function Navbar({bukaMenu,setBukaMenu,mode,setMode}) {
  const [width,setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  return ( 
        <div className={width>768 ? "navbar "  : "navbar " + (bukaMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                  <a href="#intro" className='logo'>Bima Taruna</a>
                </div>
                <Media query={{ maxWidth:768 }}>
                  {matches => matches ? (
                          <div className="Right" onClick={()=>setBukaMenu(!bukaMenu)}>
                          <Hamburger />
                          </div>) : (
                            <ul className="center">
                              <li><a href="#intro">Intro</a></li>
                              <li><a href="#portfolio">Portfolio</a></li>
                              <li><a href="#contact">Contact</a></li>
                              <li><span className="switchMode" onClick={()=>setMode(mode==='dark' ? 'light' : 'dark')}>{mode === 'dark' ? <LightMode /> : <DarkMode />}</span></li>
                            </ul>
                          )
                  }
                </Media>
            </div>
        </div>
  )
}
