import React from 'react';
import './intro.scss'
import Particles from 'react-tsparticles';
import { init } from 'ityped';
import options from './config';
import options2 from './config2';
import img from '../../assets/down-dark.png';
import img2 from '../../assets/down.png';
import { useEffect,useRef } from 'react';
export default function Intro({mode,setMode}) {
    const textRef = useRef()
    useEffect(() => {
      init(textRef.current,{
          showCursor:true,
          loop:false,
          disableBackTyping:true,
          strings: ["design & build Web App"]
      });
    }, []);
  return (
        <div className="intro" id="intro">
          
            <div className='particles'>
                {mode === 'dark' ?  <Particles id="tsparticles" options={options2}></Particles> :  <Particles id="tsparticles" options={options}></Particles>}
            </div>
            <div className='wrapper'>
                <h2>Hello, My Name is</h2>
                <h1>Mhd. Bima Taruna Cipta</h1>
                <h3>I can  <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                {mode==='dark' ? <img src={img} alt=""/> :  <img src={img2} alt=""/>}
            </a>
        </div>
        )

}
