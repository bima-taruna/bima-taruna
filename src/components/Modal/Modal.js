import React from 'react';
import './modal.scss';
export default function Modal({closeModal,data}) {
  return (
    <div className="modalBackground">
        
        <div className="container">
            
            <div className="Body">
                
                <div className="title">
                    <button onClick={()=>closeModal(false)} className="close">X</button>
                   <h3>{data.title}</h3>
                    
                </div>
                <div className="image">
                    <img src={data.img} alt=""/>
                </div>
                <div className="description">
                    <p>{data.desc}</p>
                    <div className="button">
                        <a href="#">Demo</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}
