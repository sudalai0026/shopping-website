import image from "../Assets/image.png"
import tittle from "../Assets/tittle.png"
import { useState } from "react";
import "./navbar.css"


function NavBar({ search, setsearch, setcategory }) {

    const [open, setopen] = useState(false);
    const [selected,setSelected]=useState("Categorys")
    return (

        <nav className="back">
            
            <img className="title-image" src={tittle} alt="Shopping Cart" />
            <span className="title">QuickBuy </span>
            <div className="cantainer-search">
                <input
                    className="search"
                    type="text" placeholder="Search the Products..."
                    value={search}
                    onChange={(i) => setsearch(i.target.value)} />

                <img
                    className="img"
                    src={image} />

            </div>

            <button
                className="nav"
                onClick={() => setopen(!open)}
            > 
           
               
                {selected}
            </button>

            {open && (
                <div className="dropdown-list">
                    <p className="dropdown-item" onClick={() =>{ setcategory("All");setSelected("All");setopen(false)}}>  All</p>
                    <p className="dropdown-item" onClick={() =>{ setcategory("T-Shirts");setSelected("T-Shirts");setopen(false)}}>T-Shirts</p>
                    <p className="dropdown-item" onClick={() => {setcategory("Trousers");setSelected("Trousers");setopen(false)}}>Trousers</p>
                    <p className="dropdown-item" onClick={() => {setcategory("Watches");setSelected("Watches");setopen(false)}}>Watches</p>
                    <p className="dropdown-item" onClick={() => {setcategory("Footwear");setSelected("Footwear");setopen(false)}}>Footwear</p>
                    <p className="dropdown-item" onClick={() => {setcategory("Shirts");setSelected("Shirts");setopen(false)}}>Shirts</p>
                </div>
            )}

        </nav>
    )

}




export default NavBar
