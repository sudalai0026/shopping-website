import image from "../Assets/image.png"

import "./navbar.css"


function NavBar({ search, setsearch, setcategory }) {

    return (

        <nav className="back">

            <span className="title">QuickBuy </span>
            <div className="cantainer-search">
                <input
                    className="search"
                    type="text"  placeholder="Search the Products..."
                    value={search}
                    onChange={(i) => setsearch(i.target.value)}/>
                
                <img 
                className="img"
                src={image} />

            </div>

            <select className="nav"
                onChange={(i) => setcategory(i.target.value)}
            >

                <option value="All">All </option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Trousers">Trousers</option>
                <option value="Watches">Watches</option>
                <option value="Footwear">Footwear</option>
                <option value="Shirts">Shirts</option>

            </select>


        </nav>
    )

}




export default NavBar
