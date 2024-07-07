import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function SideBar({ setCategory  }){
    const navigate = useNavigate();
    return(
        <div className="SideBar">
            <div className="SideBarTopic">
            <h2>Categories </h2>
            <br></br>
            <hr></hr>
            </div>
            <div className="SideBarBtns">
            <button onClick={() => setCategory('breakfast')} className="Btns">Breakfast</button>
            <button onClick={() => setCategory('dinner')} className="Btns">Dinner</button>
            <button onClick={() => setCategory('dessert')} className="Btns">Dessert</button>
            <button onClick={() => setCategory('drink')} className="Btns">Drinks</button>
            </div>
        </div>

    );
}


export default SideBar
