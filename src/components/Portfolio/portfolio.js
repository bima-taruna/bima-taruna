import React, { useState,useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
    featuredPortfolio,
    webApp,
    miniProject
} from "../../data";
export default function Portfolio({openModal,setOpenModal,modalData,setModalData}) {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    
    // const [currentPage,setCurrentPage] = useState(1);
    // const [itemsPerPage,setItemsPerPage] = useState(5);
    // const [pageNumberLimit, setPageNumberLimit] = useState(5);
    // const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5);
    // const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);
    // const handleClick = (event) =>{
    //     setCurrentPage(Number(event.target.id));
    // }
    // const pages = [];

    // for (let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
    //     pages.push(i);
    // }

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = data.slice(indexOfFirstItem,indexOfLastItem);

    // const renderPageNumber = pages.map(number =>{
    //     if (number<maxPageNumberLimit+1 && number > minPageNumberLimit) {
    //         return (
    //             <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active" : null}>
    //                 {number}
    //             </li>
    //         )
    //     } else {
    //         return null;
    //     }
    // });
    const list = [{
        id : "featured",
        title : "Featured"
    },{
        id : "webapp",
        title : "Web App"
    },{
        id : "mini-project",
        title : "Mini-Project"
    }
    ];

    useEffect(() => {
      switch (selected) {
          case "featured":
              setData(featuredPortfolio)
              break;
            case "webapp":
                setData(webApp)
                break;
            case "mini-project":
              setData(miniProject)
              break;
            default:
                setData(featuredPortfolio)
                break;
      }
    }, [selected]);
    
    // const handleNext = () =>{
    //     setCurrentPage(currentPage+1);

    //     if (currentPage + 1 > maxPageNumberLimit) {
    //         setMaxPageNumberLimit(maxPageNumberLimit +pageNumberLimit);
    //         setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    //     }
    // }

    // const handlePrev = () =>{
    //     setCurrentPage(currentPage-1);

    //     if ((currentPage - 1)%pageNumberLimit === 0) {
    //         setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    //         setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    //     }
    // }
  return ( 
      
      <div className="portfolio" id='portfolio'>
          
        <h2>Portfolio</h2>
        <ul>
            {list.map(item=>(<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>))} 
        </ul>
       
        <div className="container">
            
            {data.map((d)=>(
            <div className="item" onClick={()=>{setOpenModal(true); setModalData(d)}}>
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div>
            ))}
        </div>
        {/* Page Number */}
        {/* <ul className="pageNumber">
            <li>
                <button onClick={handlePrev} disabled={currentPage===pages[0]?true:false}>Prev</button>
            </li>
        {renderPageNumber}
            <li>
                <button onClick={handleNext} disabled={currentPage===pages[pages.length - 1]?true:false}>Next</button>
            </li>
        </ul> */}
      </div>
      )
}
