import React, {useState} from 'react';
import './menu.scss';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

export default function Menu({bukaMenu,setBukaMenu,mode,setMode}) {
    const [width,setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    return (
        <div className={width>906 ? "menu " : "menu " + (bukaMenu && 'active')}>
            <ul>
                <li><a href="#intro">Intro</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><span className="switchMode" onClick={()=>setMode(mode==='dark' ? 'light' : 'dark')}>{mode === 'dark' ? <LightMode style={{fontSize:40}}/> : <DarkMode style={{fontSize:40}}/>}</span></li>
            </ul>
        </div>
        )
}
